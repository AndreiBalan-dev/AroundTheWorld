import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Input from "react-bootstrap/InputGroup";
import axios from "axios";
import pathSettings from "../settings/path.json";
import "animate.css/animate.min.css";
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function ApplicationLogin() {
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
  const [userAddress, setuserAddress] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const registerPage = pathSettings.path_client + "/aplicatie/register";

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
          setText(lang.login.text_incorrect);
        } else if (r.data == "OK") {
          setText(
            lang.login.text_success
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
              }, 2000);
            });
        }
      });
  };
  return (
    <center>
      <Helmet>
        <title>{lang.login.helmet}</title>
      </Helmet>
      <h1 className="text-white animate__animated animate__zoomIn animate__fast">
        {lang.login.title}
      </h1>
      <br></br>
      <form className="w-25 text-muted">
        <div className="form-group">
          <Label
            htmlFor="inputuser1"
            className="h2 animate__animated animate__fadeIn animate__fast animate__slideInLeft"
          >
            {lang.login.title_username}
          </Label>
          <input
            type="user"
            className="form-control bg-dark text-white animate__animated animate__fadeIn animate__fast animate__slideInLeft"
            id="inputuser1"
            placeholder={lang.login.title_username}
            onChange={(e) => {
              setuserAddress(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <Label
            htmlFor="inputPassword1"
            className="h2 animate__animated animate__fadeIn animate__fast animate__slideInRight"
          >
            {lang.login.title_password}
          </Label>
          <input
            type="password"
            className="form-control bg-dark text-white animate__animated animate__fadeIn animate__fast animate__slideInRight"
            id="inputPassword1"
            placeholder={lang.login.title_password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br></br>
        <button
          type="button"
          className="btn btn-primary animate__animated animate__slideInUp"
          onClick={submitLogin}
        >
          {lang.login.buttons_submit}
        </button>
        <div className="animate__animated animate__fadeIn delay-10 mt-3">
          <a
            className="h3 text-primary"
            style={{ textDecoration: "none" }}
            href={registerPage}
          >
            {lang.login.link_register}
          </a>
        </div>
        <br></br>
        <br></br>
        <h3 className="text-white">{text}</h3>
      </form>
    </center>
  );
}

export default ApplicationLogin;
