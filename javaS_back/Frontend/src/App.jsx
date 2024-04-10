import { useEffect, useState } from "react"
import axios from "axios";

function App() {
  const [jokes , setJokes] = useState([]) 

  useEffect(()=>{
    axios.get('https://zany-space-zebra-wx6gwpr4jvjhg4j-3000.app.github.dev/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1 className="text-3xl font-bold">
      total jokes are {jokes.length}
    </h1>
{
    jokes.map((joke)=>{
      <div key={joke.id}>
        <h1>{joke.content}</h1>
      </div>
    })}
    </>
  )
}

export default App
