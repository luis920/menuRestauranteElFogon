import Platillos from "./paginas/platillos";
import Bebidas from "./paginas/bebidas";
import Postres from "./paginas/postres";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/platillos" element={<Platillos />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/postres" element={<Postres />} />
      </Routes>
    </div>
  );
}

export default App;
