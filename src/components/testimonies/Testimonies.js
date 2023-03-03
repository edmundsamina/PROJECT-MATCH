import "./Testimonies.css";
import astro from "../../fonts_images/Male and female astronauts dancing.png";
import TestimoniesCard from "./TestimonyCard";
import victoria from "../../fonts_images/victoria.png";

const testimonyObject = [
  {
    name: "Victoria",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis ac justo vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img:victoria ,
  },
  {
    name: "Victoria",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis ac justo vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: victoria,
  },
  {
    name: "Victoria",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis ac justo vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: victoria,
  },
  {
    name: "Victoria",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis ac justo vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: victoria,
  },
];

function Testimonies() {
  return (
    <section className="testimonies-section">
      <div className="testimonies-container-one">
        <div className="testomonies-container-one-text-card">
          <h4>How We Work <br/><span>Lorem Ipsum Pipsum</span></h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            iaculis ac justo vitae ornare. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas iaculis ac justo vitae ornare. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas iaculis ac justo vitae
            ornare. Lorem ipsum dolor sit amet.
          </p>
          <button>Explore More</button>
        </div>
        <img
          className="testomonies-img"
          src={astro}
          alt="two people flying through space"
        />
      </div>
      <div className="testimonies-container-two">
        <div className="testomonies">
          <h3>What Our Customers Say<br/><span>Here is what they say!</span></h3>
          <div className="card-container">
          {testimonyObject.map((testimony)=>{
            return <TestimoniesCard testimony={testimony.testimony} img={testimony.img} name={testimony.name}/>
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
