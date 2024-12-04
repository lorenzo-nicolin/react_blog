import { useState } from "react";
import axios from "axios";

function About() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmitToPost = async () => {
    console.log(post + " " + title);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/save", {
        title: title,
        desc: post,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  return (
    <>
      <div>
        <form action="">
          <input
            placeholder="Desc"
            type="text"
            name=""
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            placeholder="Title"
            type="text"
            name=""
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </form>

        <br />
        <br />

        <button type="button" className="button" onClick={handleSubmitToPost}>
          POST
        </button>
      </div>
    </>
  );
}

export default About;
