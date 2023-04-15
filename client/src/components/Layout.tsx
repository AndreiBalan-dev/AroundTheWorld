import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import earthRotatingImage from "../gifs/1440x1080.gif";
import scheduleImage from "../images/schedule.png";

function Layout() {
  return (
    <div>
      <Container>
        <center>
          <h2 className="whiteOpac mt-3">
            Ce este <span className="badge bg-dark">WorldReminder</span>
          </h2>
          <p className="whiteOpac">
            WorldReminder este un website care te ajuta in aflarea orelor din
            jurul globlului.
          </p>
          <Row className="col-md-6">
            <Image src={earthRotatingImage} rounded></Image>
          </Row>
        </center>
        <Row>
          <center>
            <Col>
              <h2 className="whiteOpac mt-3">Aplicatie</h2>
              <p className="whiteOpac mt-1">
                Pe langa informatile gasite pe acest website, ai acces la o
                aplicatie ce memoreaza intr-o baza de date datele introduse, sub
                forma unui orar, pe care ti-l poti construi singur.
              </p>
            </Col>
            <Col sm={{ span: 6, order: 1 }}>
              <Image src={scheduleImage} fluid rounded></Image>
            </Col>
          </center>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
