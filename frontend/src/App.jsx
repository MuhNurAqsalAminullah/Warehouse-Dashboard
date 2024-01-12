import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Router />;
    </BrowserRouter>
  );
}

export default App;
