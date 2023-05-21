import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import TableRow from "./TableRow";

const Toys = () => {
  // const toys = useLoaderData();
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  let index = 1;

  useTitle("All Toys");

  useEffect(() => {
    fetch("https://toy-trackers-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://toy-trackers-server.vercel.app/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="bg-green-50 my-5">
      <div className="flex items-center">
        <div className="flex border border-purple-200 rounded">
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            className="block w-full px-4 py-2 text-from-cyan-500 bg-white border rounded-md focus:from-cyan-400 focus:ring-from-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button
            onClick={handleSearch}
            className="px-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-l rounded "
          >
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
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
              <TableRow key={toy._id} toy={toy} index={index++}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toys;
