
import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";
import { ButtonDefault } from "../components.js";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

export const Header = ({btnName, btn, btnHeader, classHeader, loGoOut, arialabel, title}) => {

    const {logoff, logoffRoute} = useContext(UserContext);

    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <ButtonDefault 
                title={title} aria-label={arialabel}
                className= {btn? `${btnHeader} ${btn}` : `${btnHeader}`} 
                onClick={loGoOut ? logoff : logoffRoute}> {btnName} </ButtonDefault>
            </div>
        </header>
    )
}