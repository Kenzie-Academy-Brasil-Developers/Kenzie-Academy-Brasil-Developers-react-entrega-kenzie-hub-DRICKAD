import { TechCard } from "./techCard";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import style from "./style.module.scss";


export const TechList = ()=>{

    const {listTechs} = useContext(TechContext);


    return(
        <ul className={style.container}>
            {listTechs?.map((tech) => (
                <TechCard key={tech.id} tech={tech}/>
                ) 
            )}
        </ul>
    )
}