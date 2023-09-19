import {MainButton,Card,CompanyName,UlItem,ListItem,Div} from "./Files";
import { useState } from "react";
function GaminglibraryCard(props) {
  const [donwload, setDonwload] = useState(false);
  const handleDonwload = () => {
    setDonwload(true);
  };
  return (
    <Card>
    <Div NameClass="item">
      <UlItem>
        <ListItem>   <img src={props.imge} /> </ListItem>
        <ListItem>   <CompanyName title={props.title} category={props.category}/> </ListItem>
        <ListItem>   <CompanyName title={props.DateAddedTitle} category={props.DateAdded}/> </ListItem>
        <ListItem>   <CompanyName title={props.HoursPlayedTitle} category={props.HoursPlayed}/> </ListItem>
        <ListItem>   <CompanyName title={props.CurrentlyTitle} category={donwload ? props.state.downloaded : props.state.download}/> </ListItem>
        <ListItem>   <MainButton onClick={handleDonwload}text={donwload ? "Downloaded" : "Download"}className={donwload ? "donwloaded" : "not-donwloaded"}/> </ListItem>
      </UlItem>
    </Div>
    </Card>
  );
}
export default GaminglibraryCard;
