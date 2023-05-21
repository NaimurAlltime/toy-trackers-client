import OfferCollection from "../../offerCollection/offerCollection";
import ToyBlogs from "../../ToyBlogs/ToyBlogs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Categories></Categories>
      <OfferCollection></OfferCollection>
      <ToyBlogs></ToyBlogs>
    </div>
  );
};

export default Home;
