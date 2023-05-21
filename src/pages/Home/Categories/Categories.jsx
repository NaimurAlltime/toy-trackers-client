// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryToy from "./CategoryToy";

const Categories = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Car");

  useEffect(() => {
    fetch(`http://localhost:5000/subCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mt-14">
      <h2 className="text-3xl font-bold text-center">Shop By Category</h2>
      <Tabs className="text-center mt-4 text-lg font-medium">
        <TabList>
          <Tab onClick={() => handleTabClick("Sports Car")}>Sports Car</Tab>
          <Tab onClick={() => handleTabClick("Truck")}>Truck</Tab>
          <Tab onClick={() => handleTabClick("Regular Car")}>Regular Car</Tab>
        </TabList>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {toys.map((toy) => (
            <CategoryToy key={toy._id} toy={toy}></CategoryToy>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Categories;
