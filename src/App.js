import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Result from "./components/Result";

import "bootstrap/dist/css/bootstrap.min.css";

function App(data) {
  console.log("datadatad app", data);

  function main() {}
  return (
    <>
      <Routes>
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </>
      </Routes>
    </>
  );
}

export default App;
