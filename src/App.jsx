import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutesMain/>
      <ToastContainer autoClose={1500}/>
    </>
  )
}

export default App
