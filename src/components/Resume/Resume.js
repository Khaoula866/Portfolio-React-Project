import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import axios from "axios";
import pdf1 from "../../Assets/CV.pdf";
import pdf2 from "../../Assets/CVK.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf1} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV Khaoula EL MANSOURI
        </Button>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf2} target="_blank">
          <AiOutlineDownload />
          &nbsp;Download CV Khaoula AISSAOUI
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
