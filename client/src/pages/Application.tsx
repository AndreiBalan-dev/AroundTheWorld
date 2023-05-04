import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Input from "react-bootstrap/InputGroup";
import axios, { AxiosResponse } from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "./Application.css";
import pathSettings from "../settings/path.json";
import "animate.css/animate.min.css";

function Application() {
  const [dataMessages, setDataMessages] =
    useState<{ user?: string; message?: string; date?: string }[]>();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  var listMessages;
  let win = window.sessionStorage;
  const dummy = useRef<null | HTMLDivElement>(null);
  const autoscroll = useRef<null | HTMLDivElement>(null);

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
          } else {
            setUser(r.data);
          }
          if (!dataMessages) {
            axios
              .get(pathSettings.pathHttp_server + "/api/checkMessages")
              .then((res) => {
                setDataMessages(res.data);
              });
          }
        });
    }
    setInterval(() => {
      axios
        .get(pathSettings.pathHttp_server + "/api/checkMessages")
        .then((res) => {
          setDataMessages(res.data);
        });
    }, 300);
  }, []);
  const Scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      autoscroll.current as HTMLDivElement;
    if (scrollHeight <= scrollTop + offsetHeight + 50) {
      autoscroll.current?.scrollTo(0, scrollHeight);
    }
  };
  useEffect(() => {
    if (autoscroll.current) {
      Scroll();
    }
  });
  if (dataMessages) {
    const parseItems = dataMessages.map((object) => (
      <li key={object.date} className="list-group-item">
        <span className="text-muted">{object.user}</span>: {object.message}
      </li>
    ));
    listMessages = parseItems;
  }
  const submitMessage = () => {
    setTimeout(() => {
      if (dummy.current) {
        dummy.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
    if (message.length <= 0) {
      return;
    }
    axios.post(pathSettings.pathHttp_server + "/api/post/message", {
      user: user,
      message: message,
    });
    setMessage("");
  };

  const submitMessageKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      submitMessage();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 className="text-white">Chat Online</h2>
      </div>
      <div>
        <div
          ref={autoscroll}
          className="containerDiv mx-5 chatColor rounded-top overflow-auto text-white border border-light AppDiv"
        >
          <div className="ml-2 px-2">{listMessages}</div>
          <div ref={dummy} />
        </div>
      </div>
      <div className="position-relative mb-2 pb-3 mx-5">
        <InputGroup size="lg">
          <Form.Control
            aria-label="chat"
            className="bg-dark text-white w-25 rounded-0 rounded-bottom"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              submitMessageKey(e);
            }}
            value={message}
          />
          <Button
            variant="btn btn-outline-light rounded-0 rounded-bottom"
            id="button-addon2"
            onClick={submitMessage}
          >
            Trimite
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default Application;
