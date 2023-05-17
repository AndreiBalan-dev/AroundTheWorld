//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";
import pathSettings from "../settings/path.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

function Dashboard() {
  let win = window.sessionStorage;
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
        <title>Dashboard</title>
      </Helmet>
      <button
        type="button"
        className="btn btn-lg btn-primary animate__animated animate__zoomIn mt-3"
        onClick={submitLogout}
      >
        Logout
      </button>{" "}
    </center>
  );
}

export default Dashboard;
