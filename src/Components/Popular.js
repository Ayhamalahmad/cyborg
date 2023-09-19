import { Image, Div, CompanyName, UlItem, ListItem ,LandingAnimation } from "./Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import {  useSelector } from "react-redux";
function Popular(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  if (Selector.MoustPopular) {
    return Selector.MoustPopular.map((item) => {
      return (
        <Div NameClass="card" key={item.id}>
          <Div NameClass="thumb">
            <Image imge={item.imge} />
          </Div>
          <Div NameClass="item">
            <CompanyName title={item.title} category={item.category} />
            <UlItem key={item.id}>
              <ListItem key={item.id}>
                <span>
                  <FontAwesomeIcon className="star-icon" icon={faStar} />
                </span>
                {item.rate}
              </ListItem>
              <ListItem key={item.id}>
                <FontAwesomeIcon className="downloads" icon={faDownload} />
                {item.downloads}
              </ListItem>
            </UlItem>
          </Div>
        </Div>
      );
    });

}

}
export default Popular;
