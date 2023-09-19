import {
  SectionHeader,
  Div,
  TopDownloaded,
  FeaturedGamesSection,
} from "../Components/Files";
function FeaturedGames(props) {
  return (
    <Div NameClass="Featured-Games">
      <Div NameClass="card-top">
        <FeaturedGamesSection />
        <Div NameClass="top-container">
          <SectionHeader link="Top " h4="Downloaded" />
          <Div NameClass="cards-2">
            <TopDownloaded />
            <a>View All Games</a>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
export default FeaturedGames;