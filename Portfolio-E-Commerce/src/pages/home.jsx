
import Nav from "../components/nav"
import Sale from "../components/sale";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/carousel";
import Shops from "../components/shops";
function Home() {

  return (
    <div>
      <Carousel/>
      <Nav/>
      <Sale/>
      <SearchBar/>
      <Shops/>
    </div>
  );
}

export default Home;