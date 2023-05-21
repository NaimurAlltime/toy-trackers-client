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
      <ToyBlogs></ToyBlogs>
    </div>
  );
};

export default Home;
