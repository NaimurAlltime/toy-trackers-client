import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = form.sellerName.value;
    const toyName = form.toyName.value;
    const email = user?.email;
    const image = form.image.value;
    const sabCategory = form.sabCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const toy = {
      displayName: sellerName,
      email,
      toyName: toyName,
      image: image,
      sabCategory: sabCategory,
      rating: rating,
      price: price,
      quantity: quantity,
      details: details,
    };
    console.log(toy);

    // data fetching post api
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Toy added successful!");
          form.reset();
        }
      });
  };

  return (
    <div className="md:mx-24 bg-green-50 p-24">
      <h3 className="text-3xl font-bold text-center">Add a Toy</h3>

      <form onSubmit={handleAddToy}>
        {/* form Toy Name and Photo URL row  */}
        <div className="md:flex mt-4 mb-4">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Name"
                className="input input-bordered border-info w-full"
                name="toyName"
                id="toyName"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Toy Photo URL"
                className="input input-bordered border-info w-full"
                name="image"
                id="image"
                required
              />
            </label>
          </div>
        </div>
        {/* form Seller Name and Email row  */}
        <div className="md:flex mt-4 mb-4">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter seller name"
                className="input input-bordered border-info w-full"
                name="sellerName"
                id="sellerName"
                defaultValue={user?.displayName}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered border-info w-full"
                name="sellerEmail"
                id="sellerEmail"
                defaultValue={user?.email}
                required
              />
            </label>
          </div>
        </div>
        {/* form Sub Category and Price row  */}
        <div className="md:flex mt-4 mb-4">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <label className="input-group">
              <select name="sabCategory" className="select select-info w-full">
                <option value="Sports Car">Sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Regular Car">Regular Car</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
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
                required
              />
            </label>
          </div>
        </div>
        {/* form Rating and quantity row  */}
        <div className="md:flex mt-4 mb-4">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                step="0.01"
                max="5"
                min="1"
                type="number"
                placeholder="Enter Rating 0 to 5 number"
                className="input input-bordered border-info w-full"
                name="rating"
                id="rating"
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
              value="Add Toy"
            />
          </div>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
