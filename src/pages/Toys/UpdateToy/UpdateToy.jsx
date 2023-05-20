import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, price, quantity, details } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updatedToy = {
      price,
      quantity,
      details,
    };
    console.log(updatedToy);

    // data fetching post api
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Toy Updated Successfully!", "success");
        }
      });
  };

  return (
    <div className="md:mx-24 bg-green-50 p-24">
      <h3 className="text-3xl font-bold text-center">Update a Toy</h3>

      <form onSubmit={handleUpdateToy}>
        {/* Price row and quantity */}
        <div className="md:flex mt-4 mb-4">
          <div className="form-control md:w-1/2 mr-4 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Price"
                className="input input-bordered border-info w-full"
                name="price"
                id="price"
                defaultValue={price}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter quantity"
                className="input input-bordered border-info w-full"
                name="quantity"
                id="quantity"
                defaultValue={quantity}
                required
              />
            </label>
          </div>
        </div>

        {/* form  details row  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <textarea
              type="text"
              placeholder="Enter Toy Details"
              name="details"
              id="details"
              defaultValue={details}
              required
              className="textarea textarea-bordered border-info textarea-md w-full"
            ></textarea>
          </label>
        </div>
        <div className="md:flex mt-4 mb-7">
          <div className="form-control w-full">
            <input
              className="input input-bordered text-white font-bold border-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
              type="submit"
              value="Update Toy"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
