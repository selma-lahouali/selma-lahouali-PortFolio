import "./Projects.css";
import Creacy from "../../assets/Creacy.png";
import logoSite from "../../assets/logo-site.png";
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
              <a href="/pr-Creacy" target="_blank" rel="noopener noreferrer">
                <button>Learn More</button>
              </a>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////// */}
          <div className="project">
            <img src={logoSite} alt={logoSite} />
            <div className="project-info">
              <h2>Radiance Dental Clinic</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
                eligendi sapiente! Numquam reprehenderit eveniet atque, harum
                optio neque, corrupti sit dignissimos soluta nam sapiente minus
                odit. Animi necessitatibus tempora corporis expedita quaerat.
              </p>
              <a href="*" target="_blank" rel="noopener noreferrer">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
