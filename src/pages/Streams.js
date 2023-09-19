import { MostLiveStream } from "../Components/Files";
import {
  MainButton,
  SectionHeader,
  Div,
  Image,
  CompanyName,
  FeaturedGamesSection,
} from "../Components/Files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function Streams(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  const TopStreamersCard =Selector.TopStreamers&& Selector.TopStreamers.map((item) => {
    return (
      <Div NameClass="card-downloads card-streamers" key={item.id}>
        <Div NameClass="card card-str">
          <Div NameClass="thumb-str">
            <Image imge={item.avatar} />
          </Div>
          <Div NameClass="item-str">
            <span className="icon-str">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <CompanyName title={item.title} category={item.category} />
          </Div>
        </Div>
        <MainButton className="follow" text="Follow" />
      </Div>
    );
  });

  return (
    <>
      <Div NameClass="Featured-Games">
        <Div NameClass="card-top">
        <FeaturedGamesSection />
          <Div NameClass="top-container top-streamers">
            <SectionHeader link="Top " h4="Streamers" />
            <Div NameClass="cards-2">{TopStreamersCard}</Div>
          </Div>
        </Div>
      </Div>
      <MostLiveStream />
    </>
  );
}

export default Streams;
