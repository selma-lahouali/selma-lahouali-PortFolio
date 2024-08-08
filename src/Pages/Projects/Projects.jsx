import "./Projects.css";
import Creacy from "../../assets/Creacy.png";
const Projects = () => {
  return (
    <>
      <div id="projects" className="section ">
        <h1>My Works</h1>
        <div className="myProjects">
          <div className="project">
            <img src={Creacy} alt={Creacy} />
            <div className="project-info">
              <h2>CREACY</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
                eligendi sapiente! Numquam reprehenderit eveniet atque, harum
                optio neque, corrupti sit dignissimos soluta nam sapiente minus
                odit. Animi necessitatibus tempora corporis expedita quaerat.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////// */}
          <div className="project">
            <img src={Creacy} alt={Creacy} />
            <div className="project-info">
              <h2>CREACY</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
                eligendi sapiente! Numquam reprehenderit eveniet atque, harum
                optio neque, corrupti sit dignissimos soluta nam sapiente minus
                odit. Animi necessitatibus tempora corporis expedita quaerat.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
