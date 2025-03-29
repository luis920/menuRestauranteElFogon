import Platillos from "./paginas/platillos";
import Bebidas from "./paginas/bebidas";
import Postres from "./paginas/postres";
import Navbar from "./components/Navbar";
import MiPedido from "./paginas/mipedido";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/platillos" element={<Platillos />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/mipedido" element={<MiPedido />} />
      </Routes>
    </div>
  );
}

export default App;
