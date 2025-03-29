import { useState } from "react";
import "./App.css";
import MenuDemo from "./components/menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuDemo />
    </>
  );
}

export default App;
