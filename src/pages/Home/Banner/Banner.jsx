import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/premium-photo/toy-truck-car-blue-background_528985-2606.jpg?w=1060"
          className="w-full rounded-lg"
        />
        <BannerInfo></BannerInfo>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318378.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
          className="w-full rounded-lg"
        />
        <BannerInfo></BannerInfo>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/green-easter-car-with-green-egg_23-2149301323.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
          className="w-full rounded-lg"
        />
        <BannerInfo></BannerInfo>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/little-toy-truck-carrying-christmas-tree_23-2147576826.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
          className="w-full rounded-lg"
        />
        <BannerInfo></BannerInfo>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
