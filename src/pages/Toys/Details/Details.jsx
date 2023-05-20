import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toys = useLoaderData();
  const {
    image,
    displayName,
    email,
    toyName,
    price,
    rating,
    quantity,
    details,
  } = toys;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-5">
      <div className="p-16">
        <figure>
          <img src={image} alt="Album" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p className="mb-0">
          <span className="font-medium">Seller Name:</span> {displayName}{" "}
        </p>
        <p className="mt-0">
          <span className="font-medium">Seller Email:</span> {email}{" "}
        </p>
        <p className="mt-0">
          <span className="font-medium">Price:</span> ${price}{" "}
        </p>
        <div className="flex">
          <span className="font-medium mr-3">Rating:</span>
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          <span className="ms-2">({rating} Review)</span>
        </div>
        <p className="mt-0">
          <span className="font-medium">Available Quantity:</span> {quantity}{" "}
        </p>
        <p className="mt-0">
          <span className="font-medium">Detail Description:</span> {details}{" "}
        </p>
      </div>
    </div>
  );
};

export default Details;
