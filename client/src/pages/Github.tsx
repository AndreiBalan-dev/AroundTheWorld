//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function Github() {
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
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Github</title>
      </Helmet>
      <center>
        <br></br>
        <h2 className="text-white animate__animated animate__zoomIn ">
          {lang.github.text}
        </h2>
        <Button
          size="lg"
          type="button"
          className="btn btn-success btn-lg ml-5 mt-3 animate__animated animate__rubberBand delay-11"
          style={{ width: "100px", height: "50px" }}
          href="https://github.com/AndreiBalan-dev/WorldReminder"
          target="_blank"
        >
          Github
        </Button>
      </center>
    </div>
  );
}

export default Github;
