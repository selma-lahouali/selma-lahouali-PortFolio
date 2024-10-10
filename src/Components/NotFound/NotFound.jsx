import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found-home-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
