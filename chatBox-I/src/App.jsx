import NavBar from "./Componentes/NavBar"
import Login from "./pages/Login"
import ChatRoom from "./pages/ChatRoom"
import {Routes , Route} from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/chat" element={<ChatRoom />}/>
      </Routes>
    </>
  )
}

export default App
