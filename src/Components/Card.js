import { motion } from "framer-motion";
function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      drag={props.drag}
      className="card"
    >
      {props.children}
    </motion.div>
  );
}

export default Card;
// return (
//   <motion.div
//     <div className="thumb">
//     <motion.img
//     src={props.imge}   />
//     {props.hoverEffect && <span className={props.stream}>{props.hoverEffect}</span>}
//     </div>
//     <div className="item">
//       <h4>
//         {props.title}
//         <br /> <span className="companyName">{props.category}</span>
//       </h4>
//       <ul>
//         <li>{props.starIcon}<span>{props.rate}</span></li>
//         <li>{props.downloadIcon}<span>{props.download}</span></li>
//       </ul>
//     </div>
//   </motion.div>
// );
