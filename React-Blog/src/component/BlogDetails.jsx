import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetails() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        console.log(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);
}
