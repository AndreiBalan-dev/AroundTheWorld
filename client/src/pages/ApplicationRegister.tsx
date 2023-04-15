import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Input from "react-bootstrap/InputGroup";
import axios from "axios";

function ApplicationRegister() {
  const [userAddress, setuserAddress] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const win = window.sessionStorage;
  const navigate = useNavigate();

  useEffect(() => {
    if (win.getItem("session") != null) {
      let sessionKey = win.getItem("session");
      axios
        .post("http://localhost:3001/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data != "NOT OK") {
            return navigate("//localhost:3000/dashboard");
          }
        });
    }
  });

  var forbiddenCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const submitLogin = () => {
    if (forbiddenCharRegex.test(userAddress)) {
      return setText("Nu ai voie cu caractere speciale in username!");
    }
    axios
      .post("http://localhost:3001/api/check/register", {
        user: userAddress,
        password: password,
      })
      .then((r) => {
        console.log(r);
        if (r.data == "NOT OK") {
          setText("Userul deja exista in baza de date.");
        } else if (r.data == "OK") {
          setText(
            "Te-ai inregistrat cu succes! Acum te poti loga. Vei fi redirectionat catre pagina de logare automat in 5 secunde.."
          );
          setTimeout(() => {
            navigate("//localhost:3000/aplicatie/login");
            window.location.reload();
          }, 6000);
        }
      });
  };
  return (
    <center>
      <h1 className="text-white">Register</h1>
      <br></br>
      <form className="w-25 text-muted">
        <div className="form-group">
          <Label htmlFor="inputuser1" className="h2">
            Username
          </Label>
          <input
            type="user"
            className="form-control bg-secondary"
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
            className="form-control bg-secondary"
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
        <h3 className="text-muted">{text}</h3>
      </form>
    </center>
  );
}

export default ApplicationRegister;
