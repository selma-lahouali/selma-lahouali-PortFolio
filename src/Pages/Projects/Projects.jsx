import "./Projects.css";
import Creacy from "../../assets/Creacy.png";
import thePlace from "../../assets/THE-PLACE.jpg";
const Projects = () => {
  return (
    <>
      <div id="projects" className="section ">
        <h1>My Projects</h1>
        <div className="myProjects">
          <div className="project">
            <img src={Creacy} alt={Creacy} />
            <div className="project-info">
              <h2>CREACY</h2>
              <p>
                I developed Creacy as my final project at coding school, a fully
                functional marketplace that I both designed and coded from
                scratch. Built using the MERN stack, Creacy offers a seamless
                user experience with all the expected services of a modern
                marketplace, plus integrated online payment powered by Stripe
                and real-time chat functionality implemented with Socket.io
              </p>
              <a href="/Creacy" target="_blank" rel="noopener noreferrer">
                <button>Learn More</button>
              </a>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////// */}
          <div className="project">
            <img src={thePlace} alt={thePlace} />
            <div className="project-info">
              <h2>THE PLACE</h2>
              <p>
                Welcome to THE PLACE, where great food meets unforgettable
                experiences. Explore our menu of fresh, flavorful dishes crafted
                with care, reserve your table online, or order for delivery.
                Join us for a taste of something special!
              </p>
              <a href="https://the-place.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button>Visite</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
