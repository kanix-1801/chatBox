import NavBar from "./Componentes/NavBar"
import Login from "./pages/Login"
import ChatRoom from "./pages/ChatRoom"
import { Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={
          <PrivateRoute>
            <NavBar />
            <ChatRoom />
          </PrivateRoute> }
          />
      </Routes>
    </>
  )
}

export default App
