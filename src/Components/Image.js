import { motion } from "framer-motion";
function Image(props) {
  return (
    <motion.img  src={props.imge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}
     
    />
  );
}

export default Image;
