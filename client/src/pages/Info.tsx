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
import { Helmet } from "react-helmet";
import languages from "../lang/languages.json";

function Info() {
  let lang: {
    zone: any;
    chat?: any;
    mainpage?: any;
    login?: any;
    register?: any;
    dashboard?: any;
    informatii?: any;
    contact?: any;
    noutati?: any;
    github?: any;
    nav?: any;
  };

  const win = window.sessionStorage;
  switch (win.getItem("lang")) {
    case "ro":
      lang = languages[0];
      break;
    case "en":
      lang = languages[1];
      break;
    default:
      lang = languages[0];
      break;
  }
  console.log(lang.informatii.text_info_chat_1);
  return (
    <div className="overflow-hidden spIBody">
      <Helmet>
        <title>{lang.informatii.helmet}</title>
      </Helmet>
      <Container>
        <center>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft">
              <div>
                <h2 className="whiteOpac">
                  {lang.informatii.text_title_page}{" "}
                  <span className="badge bg-dark">
                    {lang.informatii.text_title_zones}
                  </span>{" "}
                </h2>
                <p className="whiteOpac">
                  <b>1)</b> {lang.informatii.text_info_zone_1}{" "}
                  <b>{lang.informatii.text_info_zone_2}</b>{" "}
                  {lang.informatii.text_info_zone_3}{" "}
                  <b>{lang.informatii.text_info_zone_4}</b>{" "}
                  {lang.informatii.text_info_zone_5} <br></br> <b>2)</b>{" "}
                  {lang.informatii.text_info_zone_6}{" "}
                  <b>{lang.informatii.text_info_zone_7}</b>{" "}
                  {lang.informatii.text_info_zone_8} <br></br> <b>3)</b>{" "}
                  {lang.informatii.text_info_zone_9}{" "}
                  <b>{lang.informatii.text_info_zone_10}</b>{" "}
                  {lang.informatii.text_info_zone_11}
                  <br></br>
                  <b>4)</b> {lang.informatii.text_info_zone_12}{" "}
                  <b>{lang.informatii.text_info_zone_13}</b>{" "}
                  {lang.informatii.text_info_zone_14}{" "}
                  <b>{lang.informatii.text_info_zone_15}</b>.
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
                  {lang.informatii.text_title_page}{" "}
                  <span className="badge bg-dark">
                    {lang.informatii.text_title_register}
                  </span>{" "}
                </h2>
                <p className="whiteOpac">
                  {lang.informatii.text_info_register_1}{" "}
                  <b>{lang.informatii.text_info_register_2}</b>,{" "}
                  {lang.informatii.text_info_register_3} <br></br>{" "}
                  {lang.informatii.text_info_register_4} <b>SHA256</b>{" "}
                  {lang.informatii.text_info_register_5} <br></br>{" "}
                  {lang.informatii.text_info_register_6}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="p-3">
            <Col className="my-auto animate__animated animate__backInLeft delay-11">
              <div>
                <h2 className="whiteOpac">
                  {lang.informatii.text_title_page}{" "}
                  <span className="badge bg-dark">
                    {lang.informatii.text_title_chat}
                  </span>{" "}
                </h2>
                <p className="whiteOpac">
                  {lang.informatii.text_info_chat_1}
                  <br></br>
                  <b>1)</b> {lang.informatii.text_info_chat_2} (<b>innerDiv</b>){" "}
                  {lang.informatii.text_info_chat_3} <br></br>
                  <b>2)</b> {lang.informatii.text_info_chat_4} <b>"input"</b>{" "}
                  <br></br>
                  <b>3)</b> {lang.informatii.text_info_chat_5}{" "}
                  <b>{lang.informatii.text_info_chat_6}</b>{" "}
                  {lang.informatii.text_info_chat_7} <b>"Enter"</b>.<br></br>
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
                  {lang.informatii.text_title_chat_session}{" "}
                  <span className="badge bg-dark">
                    {lang.informatii.text_title_chat}
                  </span>{" "}
                </h2>
                <p className="whiteOpac">
                  {lang.informatii.text_info_chat_session_1}{" "}
                  <b>{lang.informatii.text_info_chat_session_2}</b>,{" "}
                  {lang.informatii.text_info_chat_session_3}{" "}
                  <b>{lang.informatii.text_info_chat_session_4}</b>.{" "}
                  {lang.informatii.text_info_chat_session_5}{" "}
                  <b>{lang.informatii.text_info_chat_session_6}</b>,{" "}
                  {lang.informatii.text_info_chat_session_7}{" "}
                  <b>"session storage"</b>
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
