import "./Creacy.css";
import NaveBar2 from "../../../Components/Navbar2/Navbar2";
import signUpPage from "../../../assets/CreacySignUp.png";
import homePage from "../../../assets/Creacy.png";
import cart from "../../../assets/CreacyCart.png";
import shop from "../../../assets/CreacyShop.png";
import addProd from "../../../assets/CreacyAddProd.png";
import editShop from "../../../assets/editShop.png";
const Creacy = () => {
  return (
    <>
      <NaveBar2></NaveBar2>
      <div className="creacy-proj">
        <h1 className="creacy-title">CREACY :</h1>
        <p className="creacy-text">
          I developed Creacy as my final project at coding school, a fully
          functional and user-friendly marketplace that represents the
          culmination of my design and development skills. This project was
          built using the MERN stack, which includes MongoDB for database
          management, Express.js for server-side logic, React for the front-end
          user interface, and Node.js for back-end operations. The result is a
          robust, scalable platform that delivers a seamless and intuitive user
          experience. Creacy is more than just a standard marketplace. It offers
          all the essential features users expect, such as product listings,
          search functionality, and user accounts, but also goes beyond by
          incorporating advanced features that enhance user engagement and
          trust. One of the standout features is the integrated online payment
          system, powered by Stripe. This allows users to complete transactions
          securely and effortlessly, ensuring a smooth purchasing experience
          from start to finish. Additionally, I implemented real-time chat
          functionality using Socket.io, enabling instant communication between
          buyers and sellers. This feature not only fosters a sense of community
          but also enhances customer support and facilitates quicker
          decision-making during transactions. Through Creacy, I aimed to create
          a marketplace that's not only fully operational but also scalable and
          ready for real-world use. This project showcases my ability to combine
          design, development, and real-world application of technology to build
          a platform that meets modern market demands. <br />
          If you want to quickly try this website, feel free to use this testing
          account. <br />
          Email : test@gmail.com <br />
          Password : 123456
        </p>
        <a
          href="https://creacy.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        ><button>Visit the web site</button></a>
      </div>

      <div className="creacy-grid">
        <img src={signUpPage} alt="image not found" />
        <img src={homePage} alt="image not found" />
        <img src={cart} alt="image not found" />
        <img src={shop} alt="image not found" />
        <img src={addProd} alt="image not found" />
        <img src={editShop} alt="image not found" />
      </div>
    </>
  );
};

export default Creacy;
