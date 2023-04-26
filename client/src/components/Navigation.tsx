import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pathSettings from "../settings/path.json";

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
  let navZone = pathSettings.path_client + "/zone";
  let navInformatii = pathSettings.path_client + "/informatii";
  let navGithub = pathSettings.path_client + "/github";
  let navContact = pathSettings.path_client + "/contact";
  let navNoutati = pathSettings.path_client + "/noutati";
  let navAplicatie = pathSettings.path_client + "/aplicatie";

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">WorldReminder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={navZone}>Zone</Nav.Link>
            <Nav.Link href={navInformatii}>Informatii</Nav.Link>
            <NavDropdown
              title="Mai multe"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href={navGithub}>GitHub</NavDropdown.Item>
              <NavDropdown.Item href={navContact}>Contact</NavDropdown.Item>
              <NavDropdown.Item href={navNoutati}>Noutati</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={navAplicatie}>Aplicatie</NavDropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
