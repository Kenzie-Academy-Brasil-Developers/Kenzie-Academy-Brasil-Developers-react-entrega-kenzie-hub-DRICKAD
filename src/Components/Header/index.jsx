import logo from "../../assets/logoKenzieHub.svg";
import style from "./style.module.scss";

export const Header = ({btnName, btn, btnHeader,classHeader}) => {
    return(
        <header className={classHeader? `${style.headerRegister}` : `${style.headerHome}`}>
            <div className= {classHeader? `${style.containerRegister}` : `${style.containerHome}`}>
                <img className={style.img} src={logo} alt="" />
                <button className= {btn? `${btnHeader} ${btn}` : `${btnHeader}` }>{btnName}</button>
            </div>
        </header>
    )
}