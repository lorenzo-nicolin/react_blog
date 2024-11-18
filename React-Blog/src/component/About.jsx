import { useState } from "react";

function About() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmitToPost = () => {};

  return (
    <>
      <div>
        <form action="">
          <input
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
            type="text"
            name=""
            value={post}
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
