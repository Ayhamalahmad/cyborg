import { Div,SectionHeader } from "../Components/Files";
function Top(props) {
  return (
    <Div NameClass="top-container">
      <SectionHeader link="Top " h4="Downloaded" />
      <Div NameClass="cards-2">
        {props.children}
      </Div>
    </Div>
  );
}
export default Top;
