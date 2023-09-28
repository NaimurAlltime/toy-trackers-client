import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CategoryToy = ({ toy }) => {
  const { _id, toyName, image, price, rating } = toy;
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
        <h2 className="card-title">{toyName}</h2>
        <p className="text-left text-xl">${price}</p>
        <div className="card-actions">
          <Link to={`/toy/${_id}`}>
            <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryToy;
