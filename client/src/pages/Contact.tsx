//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";

function Contact() {
  return (
    <>
      <h2 className="text-muted mx-2 d-flex flex-column mb-3 align-items-center animate__animated animate__zoomIn mt-3">
        E-Mail:
        <a
          className="text-white"
          href="mailto:balanandreidev@gmail.com"
          style={{ textDecoration: "none" }}
        >
          balanandreidev@gmail.com
        </a>
      </h2>
    </>
  );
}

export default Contact;
