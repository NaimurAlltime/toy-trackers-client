import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import BlogCard from "./BlogCard";

const ToyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useTitle("Toy Blog");

  useEffect(() => {
    fetch("https://toy-trackers-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-16 mb-7">
      <h3 className="text-3xl font-bold text-center">
        Toy Blog {blogs.length}{" "}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default ToyBlogs;
