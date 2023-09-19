import {SectionHeader,MainButton,GaminglibraryCard,Div} from "../Components/Files";
import { useSelector } from "react-redux";
function Gaminglibrary(props) {
const Selector = useSelector((state) => state.RecordDataSlice);
  return (
    <Div  NameClass="gaming-library">
      <SectionHeader link="Your Gaming" h4="Library" />
      {Selector.Gaminglibrary && Selector.Gaminglibrary.map((item) => {
   return <GaminglibraryCard key={item.id} imge={item.imge} title={item.title} category={item.category} DateAddedTitle={item.DateAddedTitle} DateAdded={item.DateAdded} HoursPlayedTitle={item.HoursPlayedTitle} HoursPlayed={item.HoursPlayed} CurrentlyTitle={item.CurrentlyTitle} state={item.state}/>})}
      <MainButton text="View Your Library" className="View-button" />
    </Div>
  );
}
export default Gaminglibrary;
