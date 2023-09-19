import { motion } from "framer-motion";
function Div(props) {
  return (
    <motion.div
      className={props.NameClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      drag={props.drag}
    >
      {props.children}
    </motion.div>
  );
}
export default Div;
