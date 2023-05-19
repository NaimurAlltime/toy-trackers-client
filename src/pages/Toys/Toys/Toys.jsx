import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";

const Toys = () => {
  const toys = useLoaderData();

  return (
    <div>
      <h3>Your Toys: {toys._id} </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <TableRow key={toy._id} toy={toy}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toys;
