import { Div, Image, CompanyName } from "./Files";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function StreamInformation(props) {
  const Selector = useSelector((state) => state.RecordDataSlice);
  return (
    <>
      {Selector.StreamInformation &&
        Selector.StreamInformation.map((item) => {
          return (
            <Div NameClass="card" key={item.id}>
              <Div NameClass="thumb">
                <Image imge={item.image} />
              </Div>
              <Div NameClass="down-content">
                <Image imge={item.avatar} />
                <Div NameClass="text">
                  <span className="user">
                    <span className="icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    {item.title}
                  </span>
                  <CompanyName title={item.description} />
                </Div>
              </Div>
            </Div>
          );
        })}
    </>
  );
}
export default StreamInformation;