import { DefaultTemplate } from "../../Components/DefaultTemplate";
import style from "./style.module.scss";

export const DashboardPage = () =>{
    return(
        <DefaultTemplate btnName={"Sair"} btnHeader={"btnHome"}>
         <section className={style.sectionOne}>
            <div className={style.div1}>
                <h1 className="title-1">Olá, Samuel Leão</h1>
                <p className= "paragraph2">Primeiro módulo(Introdução ao Frontend)</p>
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