import './footer.css'
import logo from '../../fonts_images/logo2.png'
import facebook from '../../fonts_images/facebook.png'
import instagram from '../../fonts_images/facebook.png'
import twitter from '../../fonts_images/twitter.png'

export default function Footer(){
return (
    <div className="footer-container">
    <div className="footer-top">
<img src={logo} alt= "logo"/>

<div className="footer-socials">
<img src={facebook} alt= "facebook"/>

<img src={twitter} alt= "twitter"/>

<img src={instagram} alt= "instagram"/>

</div>
    </div>
 <div className="footer-bottom">
        <p>2022 Project Match Ltd</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
    </div>
    </div>
)
}