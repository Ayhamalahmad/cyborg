import { motion } from "framer-motion";
function SectionHeader(props) {
  return (
    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className={`sectopn-header ${props.className}`}
    >
      {props.link && <em>{props.link}</em>}
      {props.h4}
    </motion.h4>
  );
}
export default SectionHeader;

