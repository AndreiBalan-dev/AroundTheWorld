//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";
import pathSettings from "../settings/path.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function Dashboard() {
  let lang: {
    zone: any;
    chat?: any;
    mainpage?: any;
    login?: any;
    register?: any;
    dashboard?: any;
    informatii?: any;
    contact?: any;
    noutati?: any;
    github?: any;
    nav?: any;
  };

  const win = window.sessionStorage;
  switch (win.getItem("lang")) {
    case "ro":
      lang = languages[0];
      break;
    case "en":
      lang = languages[1];
      break;
    default:
      lang = languages[0];
      break;
  }
  const navigate = useNavigate();

  let submitLogout = () => {
    win.removeItem("session");
    navigate(pathSettings.path_client + "/aplicatie/login");
    window.location.reload();
  };
  useEffect(() => {
    if (win.getItem("session") == null) {
      navigate(pathSettings.path_client + "/aplicatie/login");
    }
    if (win.getItem("session") !== null) {
      let sessionKey = win.getItem("session");
      axios
        .post(pathSettings.pathHttp_server + "/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data == "NOT OK") {
            navigate(pathSettings.path_client + "/aplicatie/login");
          }
        });
    }
  });
  return (
    <center>
      <Helmet>
        <title>{lang.dashboard.title}</title>
      </Helmet>
      <button
        type="button"
        className="btn btn-lg btn-primary animate__animated animate__zoomIn mt-3"
        onClick={submitLogout}
      >
        {lang.dashboard.logout}
      </button>{" "}
    </center>
  );
}

export default Dashboard;
