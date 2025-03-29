import Platillos from "./components/platillos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/platillos" element={<Platillos />} />
      </Routes>
    </div>
  );
}

export default App;
