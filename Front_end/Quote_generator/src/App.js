import React from "react";
import MainQuote from "./Components/MainQuote";
import { ToastContainer } from "react-toastify";
import "./App.css";
function App()
{
  return(<>
  <MainQuote/>
  <ToastContainer />
  </>);
}
export default App;