import rocket from "../../fonts_images/Rocket_illustra.png";
import AboutUsCard from "./AboutCard";
import "./About.css";

export default function AboutUs() {
  return (
    <div id="about" className="about-us-grid">
      <div className="about-us-left">
        <AboutUsCard heading="1. Collaborate Now" statement="Empower tech beginners by connecting them for collaboration and relationship building." class="grid-a" />
        <AboutUsCard heading="3. Inclusive Network" statement="Create a welcoming community for tech beginners to collaborate, learn, and grow together." class="grid-b" />
      </div>
      <img className="about-us-img" src={rocket} alt=" flying rocket" />
      <div className="about-us-right">
        <AboutUsCard heading="2. Accessible Tech" statement="Provide tech resources and support for all individuals, including underrepresented communities." class="grid-c" />
        <AboutUsCard heading="4. Tech Diversity" statement="Foster a culture of inclusivity for everyone to learn, collaborate, and succeed in tech." class="grid-d" />
      </div>
    </div>
  );
}
