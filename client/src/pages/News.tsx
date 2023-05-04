//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";
import "animate.css/animate.min.css";

function News() {
  return (
    <div className="overflow-hidden">
      <center>
        <h1 className="text-info mt-3 animate__animated animate__fadeIn animate__slow">
          Nici o noutate momentan!<br></br>
        </h1>
        <h2 className="text-white animate__animated animate__flipInX">
          Balan Andrei Marian - Atestat 2023
        </h2>
      </center>
    </div>
  );
}

export default News;
