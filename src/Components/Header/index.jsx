
import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";
import { ButtonDefault } from "../components.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Header = ({btnName, btn, btnHeader, classHeader, setUser, loGoOut}) => {

    const navigate = useNavigate();
    const logoff = () =>{
        setUser(null);
        localStorage.clear("@TOKEN");
        toast.success("Usuário foi deslogado")
        navigate("/");
    }

    const logoffRoute = () =>{
        console.log("logoff")
        navigate("/");
    }


    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <ButtonDefault 
                className= {btn? `${btnHeader} ${btn}` : `${btnHeader}`} 
                onClick={loGoOut? logoff : logoffRoute}> {btnName} </ButtonDefault>
            </div>
        </header>
    )
}