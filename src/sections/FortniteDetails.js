import {
  SectionHeader,
  MainButton,
  CompanyName,
  UlItem,
  ListItem,
  Div,
  Image,
} from "../Components/Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function FortniteDetails(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  const ProductsItem =
    Selector.GameInformation &&
    Selector.GameInformation.map((item) => {
      return <Image imge={item.imge} />;
    });
  return (
    <>
      <SectionHeader className="game-name" h4="FORTNITE DETAILS" />
      <Div NameClass="game-details">
        <Div NameClass="left-info">
          <CompanyName
            title="Fortnite"
            NameClass="category"
            category="Sandbox"
          />
          <UlItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </span>
              4.8
            </ListItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="downloads" icon={faDownload} />
              </span>
              4.8
            </ListItem>
          </UlItem>
        </Div>
        <Div NameClass="right-info">
          <UlItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </span>
              4.8
            </ListItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="downloads" icon={faDownload} />
              </span>
              2.3M
            </ListItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="downloads" icon={faDownload} />
              </span>
              36GB
            </ListItem>
            <ListItem>
              <span>
                <FontAwesomeIcon className="downloads" icon={faDownload} />
              </span>
              Action
            </ListItem>
          </UlItem>
        </Div>
        <Div NameClass="row-imges">{ProductsItem}</Div>
        <p>
          Cyborg Gaming is free HTML CSS website template provided by
          TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
          <a>small contribution via PayPal </a>to info [at] templatemo.com and
          thank you for supporting. If you want to get the PSD source files,
          please contact us. Lorem ipsum dolor sit consectetur es dispic
          dipiscingei elit, sed doers eiusmod lisum hored tempor.
        </p>
        <MainButton className="game-download" text="Download Fortnite Now!" />
      </Div>
    </>
  );
}
export default FortniteDetails;
