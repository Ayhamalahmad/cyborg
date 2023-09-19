import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image,Div } from "../Components/Files";
import featureLeft from "../assets/images/feature-left.jpg";
import featureRight from "../assets/images/feature-right.jpg";
function FeatureBanner(props) {
  return (
    <Div NameClass="row">
      <Div NameClass="col-left">
      <Image imge={featureLeft} />
      </Div>
      <Div NameClass="col-right">
        <Div NameClass="thumb">
          <Image imge={featureRight} />
          <a target="_blank" href="https://youtu.be/r1b03uKWk_M" >
          <FontAwesomeIcon icon={faPlay } />
          </a>
        </Div>
      </Div>
    </Div>
  );
}

export default FeatureBanner;
