import { SectionHeader, Div, FeaturedGameProduct } from "../Components/Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
function FeaturedGamesSection(props) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // const handleLeftClick = () => {
  //   carousel.current.scrollLeft -= 213;
  // };

  // const handleRightClick = () => {
  //   carousel.current.scrollLeft += 213;
  // };
  return (
    <Div NameClass="card-container">
      <Div NameClass="header-icons">
        <SectionHeader link="Featured" h4="Games" />
        <Div NameClass="left-right-icons">
        {/* onClick={handleLeftClick} */}
          <span  className="left-icon">
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          {/* onClick={handleRightClick} */}
          <span  className="right-icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Div>
      </Div>
      {/* DO Not Edit This Div */}
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="cards"
        // style={{
        //   overflowX: "auto",
        //   scrollBehavior: "smooth",
        //   scrollSnapType: "x mandatory",
        //   WebkitOverflowScrolling: "touch",
        //   scrollPadding: "0px 50px",
        // }}
      >
        <FeaturedGameProduct />
      </motion.div>
    </Div>
  );
}

export default FeaturedGamesSection;
