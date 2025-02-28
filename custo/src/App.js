import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-hight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
//dsfasdf
