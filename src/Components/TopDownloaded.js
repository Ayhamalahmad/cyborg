import { useSelector } from "react-redux";
import {  Div, Image, CompanyName, UlItem, ListItem} from "../Components/Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload,faStar} from "@fortawesome/free-solid-svg-icons";
function TopDownloaded(props) {
    const Selector = useSelector((state) => state.RecordDataSlice);
    return (
        Selector.TopDownloaded && Selector.TopDownloaded.map((item) => {
            return (
              <Div NameClass="card-downloads" key={item.id}>
                <Div NameClass="card">
                  <Div NameClass="thumb">
                    <Image imge={item.imge} />
                  </Div>
                  <Div NameClass="item">
                    <CompanyName title={item.title} category={item.category} />
                    <UlItem>
                      <ListItem>
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <span>{item.rate}</span>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon className="downloads" icon={faDownload} />
                        <span>{item.download}</span>
                      </ListItem>
                    </UlItem>
                  </Div>
                </Div>
                <FontAwesomeIcon className="download" icon={faDownload} />
              </Div>
            );
          })
    );
}

export default TopDownloaded;