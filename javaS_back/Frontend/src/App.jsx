import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">total jokes are {joke.length}</h1>

      {joke.map((jokes) => (
        <div key={jokes.id}>
          <h1>{jokes.content}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
