// import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCars from "../../ToyCars/ToyCars";

const Categories = () => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl font-bold text-center">Shop By Category</h2>
      {/* <div>
        <ul className="flex">
          <li>
            <Link>ALL</Link>
          </li>
          <li>
            <Link>New</Link>
          </li>
          <li>
            <Link>Man</Link>
          </li>
        </ul>
      </div> */}
      <Tabs className="text-center mt-4 text-lg font-medium">
        <TabList>
          <Tab>All</Tab>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Regular Car</Tab>
        </TabList>

        <TabPanel>
          <ToyCars></ToyCars>
        </TabPanel>
        <TabPanel>
          <h2>Sports Car</h2>
        </TabPanel>
        <TabPanel>
          <h2>Truck</h2>
        </TabPanel>
        <TabPanel>
          <h2>Regular Car</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
