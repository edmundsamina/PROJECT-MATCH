import "./header.css";

import "./header.css";
import Logo from "./logo.js";

function Header(props) {
  return (
    <div className="header">
    <Logo/>
      <ul>
        <li>
          {" "}
          <a href="#home"> Home </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#profile"> Profile </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#posts"> Posts </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact"> Contact </a>{" "}
        </li>
        <li className="welcome">
          {" "}
          <a href="#welcome"> Welcome User01 </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
