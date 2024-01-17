import { TechCard } from "./techCard";
import style from "./style.module.scss";

export const TechList = ()=>{
    return(
        <ul className={style.container}>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
        </ul>
    )
}