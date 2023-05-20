import { Link } from "react-router-dom";

const TableRow = ({ toy, index }) => {
  const { _id, displayName, toyName, sabCategory, price, quantity } = toy;
  return (
    <tr>
      <td> {index} </td>
      <td>{displayName}</td>
      <td>{toyName}</td>
      <td>{sabCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-info btn-xs">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
