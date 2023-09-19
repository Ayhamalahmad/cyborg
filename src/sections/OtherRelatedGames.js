import { SectionHeader, Popular,Div } from "../Components/Files";
function OtherRelatedGames(props) {
  return (
    <Div NameClass="other-related-games">
      <SectionHeader link="Other Related" h4="Games" />
      <Div NameClass="cards-related"><Popular /></Div>
    </Div>
  );
}
export default OtherRelatedGames;
