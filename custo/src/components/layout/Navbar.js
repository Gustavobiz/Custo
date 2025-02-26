import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs"></img>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Company">Company</Link>
          </li>
          <li>
            <Link to="/NewProject">NewProject</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
