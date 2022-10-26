import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../que.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdOutlineCheckCircle } from "react-icons/md";
import "../result.css";

export default function Result() {
  return (
    <>
      <div className="resultmain">
        <div className="result">
          <MdOutlineCheckCircle className="resulticon" />
          <p>Result</p>
        </div>
        <Container>
          <div className="main p-4">
            <p className="resultp  mb-3">You need more Practice !</p>
            <div className="mt-2">
              <p className="resultdesc mb-4">You Score: 95%</p>
            </div>
            <div>
              <div className="quebtn">
                <Row>
                  <Col>
                    {" "}
                    <p className="float-start mb-1">
                      Total numbers of questions:
                    </p>
                  </Col>{" "}
                  <Col>
                    <p className="float-end mb-1">20</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <p className="float-start mb-1">
                      Numbers of attempted questions:
                    </p>
                  </Col>{" "}
                  <Col>
                    <p className="float-end mb-1">20</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <p className="float-start mb-1">
                      Numbers of Correct Answers:
                    </p>
                  </Col>{" "}
                  <Col>
                    <p className="float-end mb-1">17</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <p className="float-start mb-1">Number of Wrong Answers:</p>
                  </Col>{" "}
                  <Col>
                    <p className="float-end mb-1">3</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-3 justify-content-center d-flex">
          <Link to="/questions">
            <Button className="me-3 again">Play Again</Button>
          </Link>
          <Link to="/">
            <Button className="home">Back to Home</Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
