import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import TableRow from "./TableRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  let index = 1;

  const url = `http://localhost:5000/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  return (
    <div className="bg-green-50 my-5">
      <h3>My Toys: {myToys.length} </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Detail Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <TableRow
                key={myToy._id}
                myToy={myToy}
                index={index++}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
