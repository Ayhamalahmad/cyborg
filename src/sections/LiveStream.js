import {SectionHeader,MainButton,Div,CompanyName,Image} from "../Components/Files";
import { useSelector } from "react-redux";
function LiveStream(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  return (
    <Div NameClass="Live-stream">
      <SectionHeader h4="How To Start Your" link="Live Stream" />
      <Div NameClass="row">
  {Selector.LiveStreamCard && Selector.LiveStreamCard.map((item) => {
   return (
     <Div NameClass="item" key={item.id}>
       <Image imge={item.imge} />
       <CompanyName title={item.title} />
       <p>
         {item.description}
         <a href={item.linkAddress}>{item.linkTitle}</a>
       </p>
     </Div>
   );
 })}
        </Div>
      <MainButton text="Go To Profile" />
    </Div>
  );
}
export default LiveStream;
