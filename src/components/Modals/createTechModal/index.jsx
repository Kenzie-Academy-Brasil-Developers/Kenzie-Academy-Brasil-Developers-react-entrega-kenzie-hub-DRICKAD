import { ButtonDefault, InputDefault } from "../../components.js";
import style from "./style.module.scss";

export const CreateTechModal = () =>{
    return(
        <div role="dialog"className={style.bottomModal} >
            <div  className={style.modal}>
                <div className={style.div1}>
                    <h2 className="tecTitle">Cadastrar Tecnologia</h2>
                    <ButtonDefault className="x">X</ButtonDefault>
                </div>
                <div className={style.div2}>
                    <form className={style.form}>
                        <InputDefault
                        label={"Nome"} 
                        type="text" 
                        placeholder="Typescript" 
                        />
                    <div className={style.divSelect}>
                        <label className="headine">Selecione Status</label>
                        <select className="paragraph">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>

                        <ButtonDefault class="buttonPrimary title-3" type="submit">Cadastrar Tecnologia</ButtonDefault>
                    </form>
                </div>
            </div>

        </div>
    )
}