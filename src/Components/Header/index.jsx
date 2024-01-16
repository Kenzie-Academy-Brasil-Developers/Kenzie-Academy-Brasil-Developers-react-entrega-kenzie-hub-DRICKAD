
import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";
import { ButtonDefault } from "../components.js";
import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext.jsx";

export const Header = ({btnName, btn, btnHeader, classHeader, loGoOut}) => {

    const {logoff, logoffRoute} = useContext(TodoContext);

    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <ButtonDefault 
                className= {btn? `${btnHeader} ${btn}` : `${btnHeader}`} 
                onClick={loGoOut ? logoff : logoffRoute}> {btnName} </ButtonDefault>
            </div>
        </header>
    )
}