import "./Technologies.css";
import React from "../../assets/react.png";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import Javascript from "../../assets/Javascript.png";
import reactRouter from "../../assets/react-router.png";
import Redux from "../../assets/redux.png";
import Bootstrap from "../../assets/Bootstrap.png";
import TailwindCSS from "../../assets/tailwind-css.png";
import MUI from "../../assets/MUI.png";
import Stripe from "../../assets/Stripe.png";
import Git from "../../assets/Git.png";
import Netlify from "../../assets/Netlify.png";
import NodeJS from "../../assets/NodeJS.png";
import Express from "../../assets/Express.png";
import MongoDB from "../../assets/MongoDB.png";
import Mongoose from "../../assets/Mongoose.png";
import Postman from "../../assets/Postman.png";
import Multer from "../../assets/Multer.png";
import Cloudinary from "../../assets/Cloudinary.png";
import SocketIo from "../../assets/SocketIo.png";
import Render from "../../assets/Render.png";
const Technologies = () => {
  return (
    <>
      <div className="technologies">
        <h1>Technologies And Tools</h1>
        <p>
          Leveraging advanced technologies and robust open-source software, I
          develop user-centric, high-performance applications and websites for
          smartphones, tablets, and desktops. I utilize the MERN stack and am
          eager to expand my knowledge further.
        </p>
        {/* ////////////////////////////FRONT-END/////////////////////////// */}
        <div className="front-end">
          <h2>Front-End</h2>
          <div className="front-end-grid">
            <p>
              <img src={React} alt={React} /> React
            </p>
            <p>
              <img src={HTML} alt={HTML} /> HTML
            </p>
            <p>
              <img src={CSS} alt={CSS} /> CSS
            </p>
            <p>
              <img src={Javascript} alt={Javascript} /> Javascript
            </p>
            <p>
              <img src={reactRouter} alt={reactRouter} /> React Router
            </p>
            <p>
              <img src={Redux} alt={Redux} /> Redux
            </p>
            <p>
              <img src={Bootstrap} alt={Bootstrap} /> Bootstrap
            </p>
            <p>
              <img src={TailwindCSS} alt={TailwindCSS} /> Tailwind CSS
            </p>
            <p>
              <img src={MUI} alt={MUI} /> MUI
            </p>
            <p>
              <img src={Stripe} alt={Stripe} /> Stripe
            </p>
            <p>
              <img src={Git} alt={Git} /> Git
            </p>
            <p>
              <img src={Netlify} alt={Netlify} /> Netlify
            </p>
          </div>
        </div>
        {/* //////////////////////////////////////BACK-END/////////////////////////////////////////////////// */}
        <div className="back-end">
          <h2>Back-End</h2>
          <div className="back-end-grid">
            <p>
              <img src={NodeJS} alt={NodeJS} className="image" /> NodeJS
            </p>
            <p>
              <img src={Express} alt={Express} className="image" /> Express
            </p>
            <p>
              <img src={MongoDB} alt={MongoDB} className="image" /> Mongo DB
            </p>
            <p>
              <img src={Mongoose} alt={Mongoose} className="image" /> Mongoose
            </p>
            <p>
              <img src={Postman} alt={Postman} /> Postman
            </p>
            <p>
              <img src={Multer} alt={Multer} /> Multer
            </p>
            <p>
              <img src={Cloudinary} alt={Cloudinary} /> Cloudinary
            </p>
            <p>
              <img src={SocketIo} alt={SocketIo} /> Socket.io
            </p>
            <p>
              <img src={Render} alt={Render} /> Render
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
