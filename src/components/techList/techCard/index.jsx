import { FaRegTrashAlt } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import style from "./style.module.scss";

export const TechCard = ({tech}) =>{
    
    const {setOpenEditModal, deleteTechs, setTechEdit} = useContext(TechContext);

    const submit = (tech) =>{
        setOpenEditModal(true)
        setTechEdit(tech)
    }
 
    return(
        <li className={style.container}>
            <h2 className="tecTitle">{tech?.title}</h2>
            <div className={`${style.div1} paragraph2`} >
                <p>{tech?.status}</p>

                        <ImPencil size={21}
                        title="editar" aria-label="edit"
                        onClick={()=> submit(tech) }
                        className={`${style.icone}`}/>


                        <FaRegTrashAlt size={21}
                        title="deletar" aria-label="delete"
                        onClick={() => deleteTechs(tech.id)}
                        className={`${style.icone}`}/>

            </div>   
        </li>
    )
}

// onClick={() => deleteTodo(todo.id)}