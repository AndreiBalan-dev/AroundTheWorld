import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";
import infoZone from "../images/infoZone.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import infoRegister from "../images/infoRegister.png";
import infoChat from "../images/infoChat.png";
import infoSession from "../images/infoSession.png";

function Info() {
  return (
    <div className="overflow-hidden spIBody">
      <Container>
        <center>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft">
              <div>
                <h2 className="whiteOpac">
                  Pagina <span className="badge bg-dark">zone</span>{" "}
                </h2>
                <p className="whiteOpac">
                  <b>1)</b> Reprezinta optiunea de a selecta un <b>fus orar</b>{" "}
                  din lista cu <b>toate</b> fusurile orare. <br></br> <b>2)</b>{" "}
                  Text <b>informativ</b> legat de aceasta pagina. <br></br>{" "}
                  <b>3)</b> Butoanele care <b>arata/ascunde</b> lista cu toate
                  fusurile orare din zona respectiva denumirii butoanelor.
                  <br></br>
                  <b>4)</b> Butonul de <b>reinprospatare</b> a orelor{" "}
                  <b>din lista</b>.
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={infoZone}
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
                  src={infoRegister}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-10"
                ></Image>
              </div>
            </Col>
            <Col className="my-auto animate__animated animate__backInRight delay-10">
              <div>
                <h2 className="whiteOpac">
                  Pagina <span className="badge bg-dark">register</span>{" "}
                </h2>
                <p className="whiteOpac">
                  Pentru a te inregistra ai nevoie de un{" "}
                  <b>nume de utilizator unic</b>, care nu contine semne, si de o
                  parola. <br></br> Parola este incriptata in <b>SHA256</b> la
                  intrarea in baza de date. <br></br> Pagina de autentificare
                  functioneaza pe aceeasi baza, si iti ofera accesul de a te
                  autentifica, pentru a folosi chatul global.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft delay-11">
              <div>
                <h2 className="whiteOpac">
                  Pagina <span className="badge bg-dark">chat</span>{" "}
                </h2>
                <p className="whiteOpac">
                  Pagina este formata din 3 elemente de structura:<br></br>
                  <b>1)</b> O pagina (<b>innerDiv</b>) care contine lista cu
                  mesajele trimise. <br></br>
                  <b>2)</b> Un element de intrare de tip <b>"input"</b>{" "}
                  <br></br>
                  <b>3)</b> Un buton de <b>trimitere a mesajului</b> text scris
                  inauntrul elementului de intrare de tip "input". Aceasta
                  functie activata si de butonul <b>"Enter"</b>.<br></br>
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={infoChat}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-11"
                ></Image>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft delay-12">
              <div>
                <h2 className="whiteOpac">
                  Verificarea sesiunii pentru pagina{" "}
                  <span className="badge bg-dark">chat</span>{" "}
                </h2>
                <p className="whiteOpac">
                  Autentificare este verificata in procesul dintre{" "}
                  <b>
                    trimiterea si obtinerea datelor de pe API-ul de pe server
                  </b>
                  , si <b>verificarea datelor cu baza de date</b>. Cheia de
                  sesiune este apoi creata, si este salvata in{" "}
                  <b>stocarea sesiunii</b>, sau <b>"session storage"</b>
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={infoSession}
                  width="500px"
                  rounded
                  className="animate__animated animate__fadeIn animate__slow delay-12"
                ></Image>
              </div>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
}

export default Info;
