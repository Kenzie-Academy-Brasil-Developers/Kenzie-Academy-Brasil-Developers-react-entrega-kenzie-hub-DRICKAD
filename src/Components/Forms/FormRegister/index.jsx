import { useForm } from "react-hook-form";
import { FormRegisterSchema } from "./formRegisterSchema.js";
import { useState } from "react";
import { ButtonDefault, Input, InputPassword} from "../../components.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { api} from "../../components.js" ;
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.scss";


export const FormRegister = ()=>{

    const [showEyePassword, setShowEyePassword] = useState(false);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormRegisterSchema),
    });

    const navigate = useNavigate();

    const userRegister = async (formData) =>{
        try {
            const {data} = await api.post("/users", formData);
            toast.success(`Usuário(a) ${data.name} cadastrado(a) com sucesso!`);
            navigate("/");

        } catch (e) {
            toast.error("Usuário(a) já cadastrado(a).");
            console.log(e);
        }
    }

    const onSubmit = (formData) => {
        userRegister(formData);
    }

    return(
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <h2 className="title-1">Crie sua conta</h2>
            <p className="headineGray">Rapido e grátis, vamos nessa</p>
            <Input label={"Nome"} type="text" placeholder="Digite seu nome aqui"  {...register("name")} error={errors.name}/>
            <Input label={"Email"} type="email" placeholder="Digite seu email aqui" {...register("email")} error={errors.email}/>
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
            
            <Input 
                label={"Bio"} 
                type="text" 
                placeholder="Fale sobre você" 
                {...register("bio")} 
                error={errors.bio}/>
            <Input 
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