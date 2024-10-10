import { Link } from "react-router-dom";
import "./Navbar2.css";
const Navbar2 = () => {
  return (
    <>
      <div className="navBar-2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Contact me</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
