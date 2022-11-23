import './header.css'
import Logo from '../../fonts_images/logo.png';
import "./images/logo.css";


function Header(props) {
    return (

      <div className="header">
        
          <div className="headerLeft">  <Logo /></div>
            <div className="headerCenter"></div>
              <div className="headerRight">
             <ul>
        
           <li> <a href="#home"> Home </a> </li>
           <li> <a href="#profile"> Profile  </a> </li>
            <li> <a href="#posts"> Posts </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
                <li class="welcome"> <a href="#welcome"> Welcome User01 </a> </li> 
      </ul>
      </div>
        </div>

    )
}

      export default Header;