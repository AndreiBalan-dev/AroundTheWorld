import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Input from "react-bootstrap/InputGroup";
import axios from "axios";

function Application() {
  const navigate = useNavigate();
  let win = window.sessionStorage;
  useEffect(() => {
    if (win.getItem("session") == null) {
      navigate("//localhost:3000/aplicatie/login");
    }
    if (win.getItem("session") !== null) {
      let sessionKey = win.getItem("session");
      axios
        .post("http://localhost:3001/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          console.log(r.data);
          if (!r.data.includes("OK")) {
            navigate("//localhost:3000/aplicatie/login");
          }
        });
    }
  });

  return <h1>Test</h1>;
}

export default Application;
