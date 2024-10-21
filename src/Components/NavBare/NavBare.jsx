import { useState, useEffect, useRef } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "./NavBare.css";

const Navbare = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navRef = useRef(null); // Ref to track the navbar element

  // Toggle the navbar visibility
  const toggleNavbar = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Retract navbar after a link is clicked
  const handleLinkClick = () => {
    if (isMobileView) {
      setIsExpanded(false);
    }
  };

  // Detect clicks outside of the navbar to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of the navbar and if the navbar is expanded
      if (navRef.current && !navRef.current.contains(event.target) && isExpanded) {
        setIsExpanded(false);
      }
    };

    // Add event listener to listen for clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  // Check if the screen size matches the media query
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    setIsMobileView(mediaQuery.matches);

    // Event listener to update the state when screen size changes
    const handleResize = (e) => setIsMobileView(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <nav ref={navRef}>
      <ul className="navBare">
        {/* Home link always displayed */}
        <li className={activeSection === "home" ? "active" : ""}>
          <NavLink smooth to="#home" onClick={isMobileView ? toggleNavbar : null}>
            Home
          </NavLink>
        </li>

        {/* Display full navbar only if expanded and in mobile view */}
        {(!isMobileView || isExpanded) && (
          <>
            <li className={activeSection === "about-me" ? "active" : ""}>
              <NavLink smooth to="#about-me" onClick={handleLinkClick}>
                About me
              </NavLink>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <NavLink smooth to="#projects" onClick={handleLinkClick}>
                Projects
              </NavLink>
            </li>
            <li className={activeSection === "contact-me" ? "active" : ""}>
              <NavLink smooth to="#contact-me" onClick={handleLinkClick}>
                Contact me
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbare;
