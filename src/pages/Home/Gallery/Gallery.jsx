const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-28 lg:pt-24">
      <div className="text-center mb-3">
        <h2 className="text-3xl font-bold">Photo Gallery</h2>
        <p className="text-lg font-medium mt-3">
          Hello! Welcome to toy trackers Photo Gallery with creative & unique
          style
        </p>
      </div>
      <div className="-m-1 md:flex flex-wrap md:-m-2">
        <div className="flex md:w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-psd/3d-illustration-truck-icon_23-2149975063.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/premium-psd/blue-yellow-dump-truck-with-red-blue-tail_837431-171.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-psd/3d-illustration-car-icon_23-2149975033.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
            />
          </div>
        </div>
        <div className="flex md:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-psd/transport-still-life-background_23-2150350969.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/tZqFkK2/3d-rendering-isometric-ecologic-concept-23-2149859678.png"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/tZ14QVp/travel-sales-background-23-2150350121.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
