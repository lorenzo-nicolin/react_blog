import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "../index.css";
import BlogDetails from "./BlogDetails";

export default function Home() {
  const navigate = useNavigate();

  const gotoAddbutton = () => {
    navigate("/about");
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={gotoAddbutton}
      >
        About?
      </button>

      <div>
        <h1>Blog Details</h1>
      </div>

      <div>
        <BlogDetails />
      </div>
    </div>
  );
}
