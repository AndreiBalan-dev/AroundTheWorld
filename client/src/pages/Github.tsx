//https://github.com/AndreiBalan-dev/WorldReminder
import "bootstrap/dist/css/bootstrap.css";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Dropdown, SplitButton } from "react-bootstrap";

function Github() {
  return (
    <center>
      <br></br>
      <h2 className="text-white">
        Apasa pe butonul de mai jos pentru a vedea codul sursa al paginii
      </h2>
      <Button
        size="lg"
        type="button"
        className="btn btn-success ml-5"
        style={{ width: "100px", height: "50px" }}
        href="https://github.com/AndreiBalan-dev/WorldReminder"
        target="_blank"
      >
        Github
      </Button>
    </center>
  );
}

export default Github;
