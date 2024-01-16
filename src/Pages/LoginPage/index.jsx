import style from "./style.module.scss";
import logo from "../../assets/logoKenzieHub.svg";
import { FormLogin } from "../../components/components.js";

export const LoginPage = () =>{

    return(
            
            <div className={style.container}>
                <img src={logo} alt="" />
                <FormLogin/>
            </div>
        
    )
}