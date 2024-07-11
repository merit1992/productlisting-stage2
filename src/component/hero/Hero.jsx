import vector from "../../asset/images/Vector.svg";
import heroShoe from "../../asset/images/hero-shoe.svg";
import vectorBg from "../../asset/images/vector-bg.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="hero-content">
          <h1>PREMIUM QUALITY!</h1>
          <p>We give you a seamless shopping experience. </p>
          <div className="view-details">
            <button className="btn-hero">view details</button>
            <img src={vector} alt="" />
          </div>
        </div>
        <div className="hero-mat">
          <img className="vector-bg" src={vectorBg} alt="vector bg" />
          <img className="hero-img" src={heroShoe} alt="hero shoe" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
