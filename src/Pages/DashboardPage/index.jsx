import style from "./style.module.scss";
import { CreateTechModal, DefaultTemplate, TechList, EditTechModal } from "../../components/components.js";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import { AiOutlinePlus } from "react-icons/ai";

export const DashboardPage = () =>{

    const {user} = useContext(UserContext);

    const loGoOut= true

    return(
        <DefaultTemplate btnName={"Sair"} btnHeader={"btnHome"} loGoOut={loGoOut} >
         <section className={style.sectionOne}>
            <div className={style.container1}>
                <h1 className="title-1">Olá, {user?.name}</h1>
                <p className= "paragraph2">{user?.course_module}</p>
            </div>
         </section>
         <section className={style.sectionTwo}>
            <div className={style.container2}>
                <div className= {style.div1}>
                    <h1 className="technologies">Tecnologias</h1>
                    <AiOutlinePlus className={`${style.icone}`}/>
                </div>
                <div>
                    <TechList/>
                </div>

                {/* <EditTechModal/> */}
                {/* <CreateTechModal/> */}
            </div>
         </section>
        </DefaultTemplate>
    )
}