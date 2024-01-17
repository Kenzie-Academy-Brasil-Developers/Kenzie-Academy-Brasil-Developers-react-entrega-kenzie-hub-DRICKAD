import { FaRegTrashAlt } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import style from "./style.module.scss";

export const TechCard = () =>{
    return(
        <li className={style.container}>
            <h2 className="tecTitle">ReactJS</h2>
            <div className={`${style.div1} paragraph2`} >
                <p>Avançado</p>
                <div className={style.div2}>
                    <ImPencil size={21}/>
                    <FaRegTrashAlt size={21}/>
                </div>
            </div>
        </li>
    )
}