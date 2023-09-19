import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faPlay } from "@fortawesome/free-solid-svg-icons";
import pro from "../assets/images/profile.jpg";
import {MainButton,SectionHeader,Div,ListItem,UlItem,Image} from "./Files";
import { useSelector } from "react-redux";
function MainProfile(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  return (
    <Div NameClass="main-profile ">
      <Div NameClass="row-1">
      <Image imge={pro} />
        <Div NameClass="alan-smithee">
          <span>Offline</span>
          <SectionHeader h4="Alan Smithee" />
          <p>
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>
          <MainButton className="start-button" text="Start Live Stream" />
        </Div>
        <UlItem>
          {Selector.Sumery && Selector.Sumery.map((item) => {
              return (<ListItem key={item.id} >{item.name}<span>{item.value}</span> </ListItem>);})
          }
          </UlItem>
      </Div>
      <SectionHeader h4="Clips" link="Your Most Popular " />
      <Div NameClass="row-2">
        { Selector.ClipStatistics && Selector.ClipStatistics.map((item) => {
            return (
              <Div NameClass="thumb" key={item.id}>
                <Image imge={item.imge} />
                <UlItem>
                  <ListItem  nameClass="title-sub">
                    {item.name}
                  </ListItem>
                  <ListItem key={item.id}>
                    <span><FontAwesomeIcon icon={faEye} /> </span>
                    {item.value}
                  </ListItem>
                </UlItem>
                <Div NameClass="Play-icon">
                <a target="_blank" href="https://youtu.be/r1b03uKWk_M">
                <FontAwesomeIcon icon={faPlay } />
                </a>
                </Div>
              </Div>
            );
          })}
      </Div>
    </Div>
  );
}
export default MainProfile;
