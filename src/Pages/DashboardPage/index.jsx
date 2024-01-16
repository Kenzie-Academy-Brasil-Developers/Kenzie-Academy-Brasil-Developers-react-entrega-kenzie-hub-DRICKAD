import style from "./style.module.scss";
import { DefaultTemplate } from "../../components/components.js";
import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext.jsx";

export const DashboardPage = () =>{

    const {user} = useContext(TodoContext);

    const loGoOut= true

    return(
        <DefaultTemplate btnName={"Sair"} btnHeader={"btnHome"} loGoOut={loGoOut} >
         <section className={style.sectionOne}>
            <div className={style.div1}>
                <h1 className="title-1">Olá, ....</h1>
                <p className= "paragraph2">...</p>
            </div>
         </section>
         <section className={style.sectionTwo}>
            <div className={style.div2}>
                <h2 className="title-1">Que pena! Estamos em desenvolvimento :(</h2>
                <p className= "paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
         </section>
        </DefaultTemplate>
    )
}