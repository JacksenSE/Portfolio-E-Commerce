
import Nav from "../components/nav";
import Sale from "../components/sale";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/carousel";
import Shops from "../components/shops";
import Popular from "../components/Popular";

function Home() {

  return (
    <div>
      <Carousel/>
      <Nav/>
      <Sale/>
      <SearchBar/>
      <Shops/>
      <Popular/>
    </div>
  );
}

export default Home;