import { Link } from "react-router-dom";
import "./Navbar2.css";
import { useEffect, useRef, useState } from "react";
const Navbar2 = () => {
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
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isExpanded
      ) {
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
    <>
      <div className="navBar-2">
        <nav ref={navRef}>
          <ul>
            <li>
              <Link to="/" onClick={isMobileView ? toggleNavbar : null}>
                Home
              </Link>
            </li>
            {(!isMobileView || isExpanded) && (
              <>
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    About me
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    Contact me
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
