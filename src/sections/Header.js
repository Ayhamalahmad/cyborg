import { Logo, Search, Links } from "../Components/Files";
import ProfileHeader from "../assets/images/profile-header.jpg";
import { useRef, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
      setClicked((current) => !current);
  };
  return (
    <div  className="header container">
      <div className="logo-search">
        <Logo />
        <Search />
      </div>
      <motion.div
        layoutId="underline"
        className={`${clicked ? "show" : ""} links-profile`}
      >
        <Links />
        <NavLink to="/Profile" className={`${clicked ? "show" : ""} profile`}>
          <NavLink to="/Profile">Profile</NavLink>
          <img className="profile-header" src={ProfileHeader} />
        </NavLink>
      </motion.div>
      <div  className="menu" onClick={() => handleClick()}>
        <span  className={clicked ? "rotate" : ""}></span>
      </div>
    </div>
  );
}
export default Header;
