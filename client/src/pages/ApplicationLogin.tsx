import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Input from "react-bootstrap/InputGroup";
import axios from "axios";
import pathSettings from "../settings/path.json";

function ApplicationLogin() {
  const [userAddress, setuserAddress] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const win = window.sessionStorage;
  const navigate = useNavigate();

  useEffect(() => {
    if (win.getItem("session") != null) {
      let sessionKey = win.getItem("session");
      axios
        .post(pathSettings.pathHttp_server + "/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data != "NOT OK") {
            console.log(r.data);
            return navigate(pathSettings.path_client + "/dashboard");
          }
        });
    }
  });

  const submitLogin = () => {
    axios
      .post(pathSettings.pathHttp_server + "/api/check/login", {
        user: userAddress,
        password: password,
      })
      .then((r) => {
        console.log(r);
        if (r.data == "NOT OK") {
          setText("Date incorecte. Asigura-te ca nu ai CAPS-LOCK pornit!");
        } else if (r.data == "OK") {
          setText(
            "Bine ai venit. Vei fi redirectionat catre aplicatie in urmatoarele 3 secunde.."
          );
          axios
            .post(pathSettings.pathHttp_server + "/api/session", {
              user: userAddress,
              password: password,
            })
            .then((res) => {
              console.log(res.data);
              win.setItem("session", res.data);
              setTimeout(() => {
                console.log("LOGIN");
                navigate(pathSettings.path_client + "/aplicatie");
                window.location.reload();
              }, 3000);
            });
        }
      });
  };
  return (
    <center>
      <h1 className="text-white">Login</h1>
      <br></br>
      <form className="w-25 text-muted">
        <div className="form-group">
          <Label htmlFor="inputuser1" className="h2">
            Username
          </Label>
          <input
            type="user"
            className="form-control bg-dark text-white"
            id="inputuser1"
            placeholder="Username"
            onChange={(e) => {
              setuserAddress(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="inputPassword1" className="h2">
            Password
          </Label>
          <input
            type="password"
            className="form-control bg-dark text-white"
            id="inputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={submitLogin}>
          Submit
        </button>
        <br></br>
        <br></br>
        <h3 className="text-white">{text}</h3>
      </form>
    </center>
  );
}

export default ApplicationLogin;
