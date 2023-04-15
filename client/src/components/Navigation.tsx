import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar() {
  const [checkLogin, setCheckLogin] = useState("Login");
  const [optionalHrefLogin, setOptionalHrefLogin] = useState(
    "//localhost:3000/aplicatie/login"
  );
  const [optionalHrefRegister, setOptionalHrefRegister] = useState(
    "//localhost:3000/aplicatie/register"
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
        .post("http://localhost:3001/api/session/check", {
          session: sessionKey,
        })
        .then((r) => {
          if (r.data == "NOT OK") {
            return;
          } else {
            let username = r.data.split(" ")[1];
            setCheckLogin(`Bine ai venit ${username}!`);
            setCheckRegister(``);
            setOptionalHrefLogin(`//localhost:3000/dashboard`);
            setOptionalHrefRegister(``);
          }
        });
    }
  });
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">WorldReminder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="//localhost:3000/zone">Zone</Nav.Link>
            <Nav.Link href="//localhost:3000/informatii">Informatii</Nav.Link>
            <NavDropdown
              title="Mai multe"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="//localhost:3000/github">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="//localhost:3000/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="//localhost:3000/noutati">
                Noutati
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="//localhost:3000/aplicatie">
                Aplicatie
              </NavDropdown.Item>
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
