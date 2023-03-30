import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import earthRotatingImage from "../gifs/earth-cloudy-256-slow.gif";
import scheduleImage from "../images/schedule.png";

function Layout() {
  return (
    <div>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={{ span: 5, order: 2, offset: 2 }}>
            <h2 className="whiteOpac">
              Ce este <span className="badge bg-dark">WorldReminder</span>
            </h2>
            <p className="whiteOpac">
              WorldReminder este un website care te ajuta in aflarea orelor din
              jurul globlului.
            </p>
          </Col>
          <Col sm={{ span: 3, order: 1 }}>
            <Image src={earthRotatingImage} fluid rounded></Image>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 5, order: 1 }}>
            <h2 className="whiteOpac">De asemenea</h2>
            <p className="whiteOpac">
              Ai acces la o aplicatie ce memoreaza intr-o baza de date datele
              introduse, sub forma unui orar, pe care ti-l poti construi singur.
            </p>
          </Col>
          <Col sm={{ span: 4, order: 1, offset: 1 }}>
            <Image src={scheduleImage} fluid rounded></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
