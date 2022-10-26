import React from "react";
import "../../src/App.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="mb-4">Quiz App</h1>
          <Link to="/questions">
            <Button variant="success" className="play">
              Play
            </Button>
          </Link>
        </header>
      </div>
    </>
  );
}
