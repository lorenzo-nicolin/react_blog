import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetails() {
  const [test, setTest] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        console.log(response.data);
        setTest(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {Array.isArray(test) && test.length > 0 ? (
        test.map((item) => (
          <div key={item.id}>
            <h2>{item.Title}</h2>
          </div>
        ))
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}
