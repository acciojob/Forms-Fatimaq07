import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li id="form-link"><Link to="/">Form Layout</Link></li>
          <li id="form-ref-link"><Link to="/ref">Form with useRef</Link></li>
          <li id="form-state-link"><Link to="/state">Form with useState</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ref" element={<FormRef />} />
        <Route path="/state" element={<FormState />} />
      </Routes>
    </Router>
  );
};

export default App;
