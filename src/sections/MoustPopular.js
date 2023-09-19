import {SectionHeader,MainButton,Popular} from "../Components/Files";
import { motion } from "framer-motion";
function MoustPopular(props) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="Moust-Popular">
        <SectionHeader link="Most Popular" h4="Right Now" />
        <div className="container"><Popular /></div>
        <MainButton text="Discover Popular" />
    </motion.div>
  );
}
export default MoustPopular;
