import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Car = ({ car }) => {
  const { name, image, price, rating } = car;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[260px]" src={image} alt="toy-car" />
      </figure>
      <div className="card-body">
        <div className="flex mb-4">
          <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
          <span className="font-medium text-slate-400 text-xl ms-2">
            ({rating} Review)
          </span>
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-left text-xl">${price}</p>
        <div className="card-actions">
          <button className="btn btn-info">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Car;
