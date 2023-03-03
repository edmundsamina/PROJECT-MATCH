import rocket from "../../fonts_images/Rocket_illustra.png";
import AboutUsCard from "./AboutCard";
import "./About.css";

export default function AboutUs() {
  return (
    <div id="about" className="about-us-grid">
      <div className="about-us-left">
        <AboutUsCard class="grid-a" />
        <AboutUsCard class="grid-b" />
      </div>
      <img className="about-us-img" src={rocket} alt=" flying rocket" />
      <div className="about-us-right">
        <AboutUsCard class="grid-c" />
        <AboutUsCard class="grid-d" />
      </div>
    </div>
  );
}
