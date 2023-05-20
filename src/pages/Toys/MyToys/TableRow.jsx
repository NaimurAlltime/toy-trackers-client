import { Link } from "react-router-dom";

const TableRow = ({ myToy, index, handleDelete }) => {
  const { _id, displayName, toyName, price, quantity, details } = myToy;

  return (
    <tr>
      <td> {index} </td>
      <td>{displayName}</td>
      <td>{toyName}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        {details.slice(0, 45)}
        ...
        <Link to={`/toy/${_id}`} className="text-info font-medium ml-2">
          Read More
        </Link>
      </td>

      <th>
        <Link to={`/update/toy/${_id}`}>
          <button className="btn btn-info btn-xs mr-3">Update</button>
        </Link>
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 border-0 btn-xs"
          >
            Delete
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
