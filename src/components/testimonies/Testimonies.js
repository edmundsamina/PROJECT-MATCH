import "./Testimonies.css";
import astro from "../../fonts_images/Male and female astronauts dancing.png";
import TestimoniesCard from "./TestimonyCard";
import victoria from "../../fonts_images/victoria.png";

const testimonyObject = [
  {
    name: "Omar",
    occupation: "Engineering Student",
    testimony:
      "Project Match is a great platform for beginners in tech! I found collaborators and exciting new opportunities.",
    img: victoria,
  },
  {
    name: "Javier",
    occupation: "Grad Bootcamper",

    testimony:
      "I found an amazing mentor through Project Match who has been invaluable in guiding me through my tech career and helped me succeed.",
    img: victoria,
  },
  {
    name: "Sarah",
    occupation: "Project Manager",

    testimony:
      "Project Match's accessible tech resources have helped me advance my skills and gain practical experience in the tech industry, which has boosted my confidence.",
    img: victoria,
  },
  {
    name: "Victoria",
    occupation: "Junior Developer",

    testimony:
      "Thanks to Project Match's inclusive community, I've gained the confidence, skills, and support I need to succeed in tech and reach my goals.",
    img: victoria,
  },
];

function Testimonies() {
  return (
    <section className="testimonies-section">
      <div className="testimonies-container-one">
        <div className="testomonies-container-one-text-card">
          <h4>
            Why You Should Get Involved! <br />
            <span>How do we work?</span>
          </h4>
          <p>
            Project Match is a website designed to help beginners in the tech
            industry connect with others to collaborate on projects. This
            platform serves as a community where users can find like-minded
            individuals who are passionate about technology and interested in
            working together on projects. One of the primary ways that users can
            connect with each other is by posting their own projects. They can
            explain the project they want to work on, including the tech stack
            and any relevant GitHub links if applicable. This allows other users
            to see what projects are available and identify which ones align
            with their own interests and skills. Additionally, users can search
            for projects by tech stack. This is helpful for those who have a
            particular skill or interest they want to utilize, or for those who
            are interested in learning a new technology. 
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
          <h3>
            What Our Customers Say
            <br />
            <span>Here is what they say!</span>
          </h3>
          <div className="card-container">
            {testimonyObject.map((testimony) => {
              return (
                <TestimoniesCard
                occupation={testimony.occupation}
                  testimony={testimony.testimony}
                  img={testimony.img}
                  name={testimony.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
