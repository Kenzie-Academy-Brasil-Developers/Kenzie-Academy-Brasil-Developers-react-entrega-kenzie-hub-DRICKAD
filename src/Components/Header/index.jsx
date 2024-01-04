
import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";
import { ButtonDefault } from "../ButtonDefault";

export const Header = ({btnName, btn, btnHeader, classHeader, logoffRoute}, ref) => {

    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <ButtonDefault className= {btn? `${btnHeader} ${btn}` : `${btnHeader}`} onClick={logoffRoute} >{btnName}</ButtonDefault>
            </div>
        </header>
    )
}