import poster from "../fonts_images/logotext.png";
import Title from "../components/title/title.js";
import AboutUs from "../components/about/About";
import Testimonies from "../components/testimonies/Testimonies";
import './home.css'
export default function Home() {
  return (
    <div className="App"> 
          <section className="hero-section">
          <div className="hero-logo">
            <Title img={poster} />
            <a href="#about"><div class="arrow"></div></a>
            </div>
          </section>
          <section className="about-us-section">
          <AboutUs/>
          </section>
          <Testimonies/>
     
    </div>
  );
}
