import { motion } from "framer-motion";
import { MainButton,Div } from "../Components/Files";
function Hero() {
  return (
    <Div   NameClass="hero-main">
        {/* <Div NameClass="container"> */}
        <Div NameClass="hero-text">
      <h6 className="hero-subtitle">Welcome To Cyborg</h6>
      <h4 className="hero-title">
        <em>BROWSE</em> OUR POPULAR GAMES HERE
      </h4>
      {/* <br/> */}
    </Div>
    <MainButton text="Browse Now" />
      {/* </Div> */}
  
  </Div>
    
    
  );
}

export default Hero;
