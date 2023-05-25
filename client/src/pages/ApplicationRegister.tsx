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

function ApplicationRegister() {
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

  useEffect(() => {
    if (win.getItem("session") != null) {
      let sessionKey = win.getItem("session");
      axios
        .post(pathSettings.pathHttp_server + "/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data != "NOT OK") {
            console.log("REGISTER");
            return navigate(pathSettings.path_server + "/dashboard");
          }
        });
    }
  });

  var forbiddenCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const submitLogin = () => {
    if (forbiddenCharRegex.test(userAddress)) {
      return setText(lang.register.text_special_char);
    }
    axios
      .post(pathSettings.pathHttp_server + "/api/check/register", {
        user: userAddress,
        password: password,
      })
      .then((r) => {
        console.log(r);
        if (r.data == "NOT OK") {
          setText(lang.register.text_user_exist);
        } else if (r.data == "OK") {
          setText(lang.register.text_success);
          setTimeout(() => {
            navigate(pathSettings.path_client + "/aplicatie/login");
            window.location.reload();
          }, 3000);
        }
      });
  };
  return (
    <center>
      <Helmet>
        <title>{lang.register.helmet}</title>
      </Helmet>
      <h1 className="text-white animate__animated animate__zoomIn animate__fast">
        {lang.register.title}
      </h1>
      <br></br>
      <form className="w-25 text-muted">
        <div className="form-group">
          <Label
            htmlFor="inputuser1"
            className="h2 animate__animated animate__fadeIn animate__fast animate__slideInLeft"
          >
            {lang.register.title_username}
          </Label>
          <input
            type="user"
            className="form-control bg-dark text-white animate__animated animate__fadeIn animate__fast animate__slideInLeft"
            id="inputuser1"
            placeholder={lang.register.title_username}
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
            {lang.register.title_password}
          </Label>
          <input
            type="password"
            className="form-control bg-dark text-white animate__animated animate__fadeIn animate__fast animate__slideInRight"
            id="inputPassword1"
            placeholder={lang.register.title_password}
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
          {lang.register.buttons_submit}
        </button>
        <br></br>
        <br></br>
        <h3 className="text-white">{text}</h3>
      </form>
    </center>
  );
}

export default ApplicationRegister;
