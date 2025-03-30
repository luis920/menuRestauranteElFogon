import Platillos from "./paginas/platillos";
import Bebidas from "./paginas/bebidas";
import Postres from "./paginas/postres";
import Navbar from "./components/Navbar";
import MiPedido from "./paginas/mipedido";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./paginas/Home";

function App() {
  const location = useLocation();

  const noNavbarRoutes = ["/"];

  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/platillos" element={<Platillos />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/mipedido" element={<MiPedido />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
