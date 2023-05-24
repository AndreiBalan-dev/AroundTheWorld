import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function NotFound() {
  return (
    <center>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1 className="text-white">404 - PAGINA NU A FOST GASITA</h1>
    </center>
  );
}

export default NotFound;
