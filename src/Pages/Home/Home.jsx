import "./Home.css";
import cv from "../../assets/CV-LAHOUALI-Selma.pdf";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div id="home" className="home section">
          <h1>Hi, i'm SELMA LAHOUALI</h1>
          <h1>full-stack web developer</h1>
          <p id="paragraph-1">
            I'm a young and passionate full-stack web developer, constantly
            seeking opportunities to improve and learn new skills. I prioritize
            user experience in my development process, ensuring that every line
            of code I write is not only efficient and reusable but also enhances
            the overall experience for users. My approach is driven by a deep
            passion for integrating design, technology, and innovation. From
            conceptualization to launch, I'm dedicated to guiding each project,
            ensuring it meets the highest standards and exceeds expectations.
          </p>
          <p id="paragraph-2">
            Every project presents an opportunity for me to push boundaries,
            explore new concepts, and create meaningful experiences for users.
            Whether through elegant designs, intuitive interfaces, or seamless
            functionality, I aim to leave a lasting impact with my work.
          </p>
          <a href={cv} target="_blank" className="resume">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
