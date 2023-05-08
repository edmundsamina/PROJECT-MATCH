import "./header.css";
import logo from "../../fonts_images/logo2.png";

function Header(props) {
 

  return (
    <nav className="header">

    <img  
    src={logo} alt="Hands on world"></img>
           
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/search"> Search </a></li>
        <li><a href="/post"> Post </a></li>
      </ul>
    </nav>
  );
}

export default Header;
