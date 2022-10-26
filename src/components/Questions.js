import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../que.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Questions() {
  const [quizdata, setQuizdata] = useState();
  const [data, setData] = useState([]);
  const [incress, setIncress] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=20").then((res) => {
      setData(res.data.results);
    });
  }, []);
  const filter = data.filter((a, i) => i === incress);
  function addbtn() {
    if (incress !== data.length - 1) {
      setIncress(incress + 1);
    } else {
      navigate("/result");
    }
  }

  function subtractbtn() {
    setIncress(incress - 1);
  }

  return (
    <>
      <div className="vvx">
        <Container>
          {filter.length > 0 ? (
            <div className="main">
              <p className="mainp mt-4 mb-2">Question</p>
              <div className="mt-4">
                <Row>
                  <Col sm={3}>
                    <p className="float-left d-flex ms-4">
                      {incress + 1} of {data.length}
                    </p>
                  </Col>
                  <Col sm={9}>
                    <p className="float-left d-flex">{filter[0].question}</p>
                  </Col>
                </Row>
              </div>
              <div className="mt-4 mb-5">
                <Row className="d-flex">
                  <Col sm={6} className="mt-2">
                    <Button className="answer">
                      {filter[0].correct_answer}
                    </Button>
                  </Col>
                  {filter[0].incorrect_answers.map((i) => (
                    <Col sm={6} className="mt-2">
                      <Button className="answer">{i}</Button>
                    </Col>
                  ))}
                </Row>
              </div>
              <div>
                <div className="quebtn">
                  <Button className="info mb-5 mt-4" onClick={subtractbtn}>
                    Previous
                  </Button>{" "}
                  <Button className="success mb-5 mt-4" onClick={addbtn}>
                    Next
                  </Button>
                  <Link to="/">
                    <Button className="danger mb-5 mt-4">Quit</Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="justify-content-center d-flex text-white">
              <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
