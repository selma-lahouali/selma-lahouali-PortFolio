import { HashLink as NavLink } from "react-router-hash-link";
import "./NavBare.css";

const Navbare = ({ activeSection }) => {
  return (
    <nav>
      <ul className="navBare">
        <li className={activeSection === "home" ? "active" : ""}>
          <NavLink smooth to="#home">
            Home
          </NavLink>
        </li>
        <li className={activeSection === "about-me" ? "active" : ""}>
          <NavLink smooth to="#about-me">
            About me
          </NavLink>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <NavLink smooth to="#projects">
            Projects
          </NavLink>
        </li>
        <li className={activeSection === "contact-me" ? "active" : ""}>
          <NavLink smooth to="#contact-me">
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbare;
