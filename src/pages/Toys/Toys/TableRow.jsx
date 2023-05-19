const TableRow = ({ toy }) => {
  const { displayName, toyName, sabCategory, price, quantity } = toy;
  return (
    <tr>
      <th></th>
      <td>{displayName}</td>
      <td>{toyName}</td>
      <td>{sabCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">View Details</button>
      </th>
    </tr>
  );
};

export default TableRow;
