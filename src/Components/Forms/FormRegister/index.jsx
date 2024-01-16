import { useForm } from "react-hook-form";
import { FormRegisterSchema } from "./formRegisterSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonDefault, InputDefault, InputPassword} from "../../components.js";
import style from "./style.module.scss";
import { TodoContext } from "../../../providers/TodoContext.jsx";
import { useContext } from "react";


export const FormRegister = ()=>{
    const {showEyePassword, setShowEyePassword, onSubmitRegister,} = useContext(TodoContext);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormRegisterSchema),
    });

    return(
        <form className={style.form} onSubmit={handleSubmit(onSubmitRegister)}>

            <h2 className="title-1">Crie sua conta</h2>
            <p className="headineGray">Rapido e grátis, vamos nessa</p>
            <InputDefault label={"Nome"} type="text" placeholder="Digite seu nome aqui"  {...register("name")} error={errors.name}/>
            <InputDefault label={"Email"} type="email" placeholder="Digite seu email aqui" {...register("email")} error={errors.email}/>
            <div className= {style.divPassword1}>
                <InputPassword 
                    label= "Senha" 
                    type={showEyePassword? "text": "password"}
                    placeholder="Digite sua senha aqui"
                    {...register("password")} 
                    error={errors.password} 
                    setShowEyePassword={setShowEyePassword}
                    showEyePassword={showEyePassword}  />
            </div>
            <div className= {style.divPassword1}>
                <InputPassword
                    label="Confirmar Senha" 
                    type={showEyePassword? "text": "password"}
                    placeholder="Digite novamente sua senha" 
                    {...register("confirmPassword")} 
                    error={errors.confirmPassword}
                    setShowEyePassword={setShowEyePassword}
                    showEyePassword={showEyePassword} />
            </div>
            
            <InputDefault 
                label={"Bio"} 
                type="text" 
                placeholder="Fale sobre você" 
                {...register("bio")} 
                error={errors.bio}/>
            <InputDefault 
                label={"Contato"} 
                type="text" 
                placeholder="Opção de contato" 
                {...register("contact")} 
                error={errors.contact}/>
            
            <div className={style.divSelect}>
                <label className="headine">Selecionar Módulo</label>
                <select className="paragraph" {...register("course_module")} error={errors.course_module}>
                    <option value="Selecione Módulo">Selecione Módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                </select>
            </div>

            <ButtonDefault className={`${style.btn} buttonPrimaryNegative title-2`} type="submit"> Cadastrar </ButtonDefault>
        </form>
    )
}