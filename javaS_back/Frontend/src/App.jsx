import { useState } from "react"
import axios from "axios";

function App() {
  const [jokes , setJokes] = useState([]) 

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      total jokes are {jokes.length}
    </h1>

    jokes.map(jokes)
    </>
  )
}

export default App
