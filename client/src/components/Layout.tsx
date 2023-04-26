import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import earthRotatingImage from "../gifs/1440x1080.gif";
import chatImage from "../images/chat.jpg";

function Layout() {
  return (
    <div>
      <Container>
        <center>
          <h2 className="whiteOpac mt-3">
            Ce este <span className="badge bg-dark">WorldReminder</span>
          </h2>
          <p className="whiteOpac">
            WorldReminder este un website functional ce iti ofera informatii
            legate de zonele timpului din jurul globului.
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
                In plus, folosind WorldReminder vei avea acces la un chat
                public, unde ai posibilitatea sa trimiti mesaje si sa comunici
                international.
              </p>
            </Col>
            <Col sm={{ span: 6, order: 1 }}>
              <Image src={chatImage} fluid rounded></Image>
            </Col>
          </center>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
