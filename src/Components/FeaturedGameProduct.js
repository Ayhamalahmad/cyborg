import {
  Div,
  Image,
  CompanyName,
  UlItem,
  ListItem,
} from "../Components/Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function FeaturedGameProduct(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  return (
    <>
      {Selector.FeaturedGame &&
        Selector.FeaturedGame.map((item) => (
          <Div  NameClass="card" key={item.id}>
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
        ))}
    </>
  );
}

export default FeaturedGameProduct;
