import poster from "../fonts_images/logotext.png";
import Title from "../components/title/title.js";
import rocket from '../fonts_images/Rocket_illustra.png'
import './home.css'
export default function Home() {
  return (
    <div className="App"> 
          <section className="hero-section">
          <div className="hero-logo">
            <Title img={poster} />
            </div>
          </section>
          <section className="about-us-section">
            <img className="about-us-img" src={rocket} alt =" flying rocket"/>
          </section>
     
    </div>
  );
}
