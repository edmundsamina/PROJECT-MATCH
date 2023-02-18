import poster from "../fonts_images/PROJECT MATCH (1000 × 500px) (500 × 500px) (7000 × 3402px) (Desktop Wallpaper).svg";
import Title from "../components/title/title.js";
import './home.css'
export default function Home() {
  return (
    <div className="App"> 
          <section className="hero-section">
            <Title img={poster} />
          </section>
          <section className="about-us-section">

          </section>
     
    </div>
  );
}
