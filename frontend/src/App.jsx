import { useState } from "react";
import SplashScreen from "./Components/SplashScreen";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SplashScreen />
    </>
  );
}

export default App;
