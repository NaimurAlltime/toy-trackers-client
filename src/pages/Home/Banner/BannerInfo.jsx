const BannerInfo = () => {
  return (
    <div className="absolute flex rounded-lg items-center h-full left-0 top-0 pr-16 pb-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-white space-y-7 ml-20">
        <h2 className="text-6xl font-bold">
          Find your best
          <br />
          Toys for your
          <br />
          Children
        </h2>
        <p className="mt-5 text-lg font-medium">
          We deliver best of fantastic, age appropriate toys
          <br />
          toy trackers, straight to your door.
        </p>
        <div className="mt-7">
          <button className="btn btn-info  mr-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
