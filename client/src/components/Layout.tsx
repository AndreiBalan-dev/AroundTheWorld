import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import earthRotatingImage from "../gifs/1440x1080.gif";
import informations from "../gifs/info.gif";
import chatGif from "../gifs/chat.gif";
import chatImage from "../images/chat.jpg";
import logo from "../images/logo.png";
import timezones from "../gifs/timezones.gif";
import "animate.css/animate.min.css";
import pathSettings from "../settings/path.json";

let navZone = pathSettings.path_client + "/zone";
let navInformatii = pathSettings.path_client + "/informatii";
let navGithub = pathSettings.path_client + "/github";
let navContact = pathSettings.path_client + "/contact";
let navNoutati = pathSettings.path_client + "/noutati";
let navAplicatie = pathSettings.path_client + "/aplicatie";

function Layout() {
  return (
    <div className="overflow-hidden spIBody">
      <Container>
        <center>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft">
              <div>
                <h2 className="whiteOpac">
                  Ce este <span className="badge bg-dark">WorldReminder</span>{" "}
                  <img src={logo} width="80" height="50" />
                </h2>
                <p className="whiteOpac">
                  WorldReminder este un website functional ce iti ofera
                  informatii legate de zonele timpului din jurul globului.
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={earthRotatingImage}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow"
                ></Image>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <div>
                <Image
                  src={timezones}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-10"
                ></Image>
              </div>
            </Col>
            <Col className="my-auto animate__animated animate__backInRight delay-10">
              <div>
                <h2 className="whiteOpac">
                  Informatii{" "}
                  <span className="badge bg-dark">WorldReminder</span>{" "}
                  <img src={logo} width="80" height="50" />
                </h2>
                <p className="whiteOpac">
                  Te invit sa incerci pagina noastra{" "}
                  <a href={navZone}>de zone</a> pentru informatii legate de
                  fusurile orale internationale.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft delay-11">
              <div>
                <h2 className="whiteOpac">
                  Chat global{" "}
                  <span className="badge bg-dark">WorldReminder</span>{" "}
                  <img src={logo} width="80" height="50" />
                </h2>
                <p className="whiteOpac">
                  De asemenea, te poti inregistra si vei avea acces la pagina
                  noastra <a href={navAplicatie}>de chat</a> unde poti comunica
                  global cu toti utilizatorii inregistrati de pe website.
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={chatGif}
                  width="500"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-11"
                ></Image>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <div>
                <Image
                  src={informations}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-12"
                ></Image>
              </div>
            </Col>
            <Col className="my-auto animate__animated animate__backInRight delay-12">
              <div>
                <h2 className="whiteOpac">
                  Functionalitati{" "}
                  <span className="badge bg-dark">WorldReminder</span>{" "}
                  <img src={logo} width="80" height="50" />
                </h2>
                <p className="whiteOpac">
                  Pentru mai multe informatii poti accesa pagina noastra{" "}
                  <a href={navInformatii}>de informatii</a>.
                </p>
              </div>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
}

export default Layout;
