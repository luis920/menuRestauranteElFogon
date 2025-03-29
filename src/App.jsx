import Platillos from "./paginas/platillos";
import Bebidas from "./paginas/bebidas";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/platillos" element={<Platillos />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
    </div>
  );
}

export default App;
