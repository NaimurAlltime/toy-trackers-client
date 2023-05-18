import { useEffect, useState } from "react";
import Car from "./Car";

const ToyCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("/toyCars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
      {/* <h2>toy cars: {cars.length} </h2> */}
      {cars.map((car) => (
        <Car key={car._id} car={car}></Car>
      ))}
    </div>
  );
};

export default ToyCars;
