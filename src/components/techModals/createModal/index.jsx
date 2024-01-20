import { useForm } from "react-hook-form";
import { ButtonDefault, InputDefault } from "../../components.js";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext.jsx";
import style from "./style.module.scss";

export const CreateModal = () =>{

    const {techEdit, createTech, setOpenModal} = useContext(TechContext);
    
    const {register, handleSubmit} = useForm({
        values:{
            title:techEdit?.title,
            status:techEdit?.status
        }
    })
      
    const onSubmit = (techData) =>{
        createTech(techData)
        setOpenModal(false)
    }

    return(
        <div role="dialog"className={style.bottomModal} >
            <div className={style.modal}>
                <div className={style.div1}>
                    <h2 className="tecTitle">Cadastrar Tecnologia</h2>

                    <ButtonDefault  title="fechar" aria-label="close"
                    onClick={() => setOpenModal(false)} className="btnX"> X </ButtonDefault>

                </div>
                <div className={style.div2}>

                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <InputDefault
                        label={"Nome"} 
                        type="text" 
                        placeholder="Typescript" 
                        {...register("title")}
                        />

                        <div className={style.divSelect}>
                            <label className="headine">Selecione Status</label>
                            <select type="text" className="paragraph" {...register("status")} >
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>

                        <ButtonDefault 
                        className="buttonPrimary title-3" 
                        type="submit"
                        title="cadastrar"
                        aria-label="register">
                            Cadastrar Tecnologia
                        </ButtonDefault>
                    </form>
                </div>
            </div>

        </div>
    )
}