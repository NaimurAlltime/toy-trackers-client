const OfferCollection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <h3 className="text-3xl font-bold text-center">Offer Collection</h3>
      <div className="container md:flex items-center gap-5 p-2 md:p-0">
        <div className="relative w-full md:w-1/2 mt-5">
          <img
            src="https://i.ibb.co/9hfRtJ2/urban-taxi-delivery-service-concept-toy-yellow-car-model-copy-space-text-banner-online-mobile-applic.jpg"
            className="rounded-lg"
          />
          <div className="absolute flex rounded-lg items-center h-full right-0 top-0 pr-16 pb-7">
            <div className="space-y-7 ml-20">
              <h2 className="text-2xl font-bold">
                <span className="text-3xl">Collection</span>
                <br />
                Flat <span className="text-3xl">20%</span> off
              </h2>
              <div className="mt-7">
                <button className="btn rounded-3xl border-0 bg-gradient-to-r from-cyan-500 to-blue-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 mt-5">
          <img
            src="https://img.freepik.com/free-photo/toy-car-with-gift-box_23-2148080182.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
            className="rounded-lg"
          />
          <div className="absolute flex rounded-lg items-center h-full right-0 top-0 pr-16 pb-7">
            <div className="space-y-7 ml-20 text-white">
              <h2 className="text-2xl font-bold">
                <span className="text-3xl">Collection</span>
                <br />
                Flat <span className="text-3xl">20%</span> off
              </h2>
              <div className="mt-7">
                <button className="btn rounded-3xl border-0 bg-gradient-to-r from-cyan-500 to-blue-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCollection;
