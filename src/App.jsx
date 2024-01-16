import { RoutesMain } from "./routes/RoutesMain";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { ToastContainer } from "react-toastify";
import {Spinner} from "react-loading-io";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const {loading} = useContext(UserContext);

  const spinnerCfg = {left:"50%", transform:"translatey(150%)"};

  return (
    <>
      {loading ? <Spinner style={spinnerCfg}/> : <RoutesMain/>}
      <ToastContainer autoClose={1500}/>
    </>
  )
}

export default App
