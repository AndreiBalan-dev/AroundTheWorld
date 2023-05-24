import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pathSettings from "../settings/path.json";
import logo from "../images/logo.png";
import Form from "react-bootstrap/Form";

function NavBar() {
  const [checkLogin, setCheckLogin] = useState("Login");
  const [optionalHrefLogin, setOptionalHrefLogin] = useState(
    pathSettings.path_client + "/aplicatie/login"
  );
  const [optionalHrefRegister, setOptionalHrefRegister] = useState(
    pathSettings.path_client + "/aplicatie/register"
  );
  const [checkRegister, setCheckRegister] = useState("Register");
  function refreshPage() {
    window.location.reload();
  }
  let win = window.sessionStorage;
  useEffect(() => {
    if (win.getItem("session") == null) {
      return;
    }
    if (win.getItem("session") !== null) {
      let sessionKey = win.getItem("session");
      axios
        .post(pathSettings.pathHttp_server + "/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data == "NOT OK") {
            return;
          } else {
            let username = r.data;
            setCheckLogin(`Bine ai venit ${username}!`);
            setCheckRegister(``);
            setOptionalHrefLogin(pathSettings.path_client + `/dashboard`);
            setOptionalHrefRegister(``);
          }
        });
    }
  });
  function valoareLang() {
    if (win.getItem("lang")) {
      switch (win.getItem("lang")) {
        case "ro":
          return "0";
          break;
        case "en":
          return "1";
          break;
      }
    } else {
      return "0";
    }
  }
  function schimbaOptiune(option: any) {
    switch (option.target.value) {
      case "0":
        win.setItem("lang", "ro");
        break;
      case "1":
        win.setItem("lang", "en");
        break;
    }
    window.location.reload();
  }
  let navZone = pathSettings.path_client + "/zone";
  let navInformatii = pathSettings.path_client + "/informatii";
  let navGithub = pathSettings.path_client + "/github";
  let navContact = pathSettings.path_client + "/contact";
  let navNoutati = pathSettings.path_client + "/noutati";
  let navAplicatie = pathSettings.path_client + "/aplicatie";

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="48"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          WorldReminder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={navZone}>Zone</Nav.Link>
            <Nav.Link href={navAplicatie}>Chat Online</Nav.Link>
            <NavDropdown
              title="Mai multe"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href={navInformatii}>
                Informatii
              </NavDropdown.Item>
              <NavDropdown.Item href={navContact}>Contact</NavDropdown.Item>
              <NavDropdown.Item href={navNoutati}>Noutati</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={navGithub}>GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href={optionalHrefLogin}>
              {checkLogin}
            </Nav.Link>
            <Nav.Link eventKey={2} href={optionalHrefRegister}>
              {checkRegister}
            </Nav.Link>
          </Nav>
          <Nav>
            <Form.Select
              aria-label="Limba"
              className=""
              onChange={schimbaOptiune}
              value={valoareLang()}
            >
              <option value="0">🇷🇴</option>
              <option value="1">🇺🇸</option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
