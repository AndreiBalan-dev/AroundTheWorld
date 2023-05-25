//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function News() {
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
        <title>{lang.noutati.helmet}</title>
      </Helmet>
      <center>
        <h1 className="text-info mt-3 animate__animated animate__fadeIn animate__slow">
          {lang.noutati.title}
          <br></br>
        </h1>
        <h2 className="text-white animate__animated animate__flipInX">
          {lang.noutati.text}
        </h2>
      </center>
    </div>
  );
}

export default News;
