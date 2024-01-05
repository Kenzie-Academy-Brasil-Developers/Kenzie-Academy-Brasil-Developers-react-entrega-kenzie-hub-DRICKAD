import { useNavigate } from "react-router-dom";
import { DefaultTemplate } from "../../Components/DefaultTemplate";
import style from "./style.module.scss";

export const DashboardPage = ({user, setUser}) =>{
    const navigate = useNavigate();

    const logoffRoute = () =>{
        navigate("/");
    }
    
    return(
        <DefaultTemplate setUser={setUser} logoffRoute={logoffRoute} btnName={"Sair"} btnHeader={"btnHome"}>
         <section className={style.sectionOne}>
            <div className={style.div1}>
                <h1 className="title-1">Olá, {user.name}</h1>
                <p className= "paragraph2">{user.course_module}</p>
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