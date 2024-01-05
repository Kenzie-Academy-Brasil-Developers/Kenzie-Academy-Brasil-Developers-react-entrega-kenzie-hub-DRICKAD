
import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";
import { ButtonDefault } from "../ButtonDefault";
import { useNavigate } from "react-router-dom";

export const Header = ({btnName, btn, btnHeader, classHeader, setUser}, ref) => {

    const navigate = useNavigate();

    const logoff = () =>{
        setUser(null);
        navigate("/");
        localStorage.clear("@TOKEN");
    }

    const logoffRoute = () =>{
        navigate("/");
    }


    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <ButtonDefault 
                className= {btn? `${btnHeader} ${btn}` : `${btnHeader}`} 
                onClick={btnName === "Saír" ? logoff : logoffRoute}> {btnName} </ButtonDefault>
            </div>
        </header>
    )
}