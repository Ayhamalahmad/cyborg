import { SectionHeader, Div, StreamInformation } from "../Components/Files";
import { MainButton } from "../Components/Files";
function MostLiveStream(props) {
  return (
    <Div NameClass="Most-Live-Stream">
      <SectionHeader h4="Live Stream" link="Most Popular" />
      <Div NameClass="Live-row">
        <StreamInformation />
      </Div>
      <MainButton text="Discover All Streams" />
    </Div>
  );
}
export default MostLiveStream;
