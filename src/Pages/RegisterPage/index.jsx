import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultTemplate, Input, ButtonDefault, FormRegisterSchema} from "../../Components/components.js";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";

export const RegisterPage = () =>{
    const classHeader = true;

    const navigate = useNavigate();

    const logoffRoute = () =>{
        navigate("/");
    }

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormRegisterSchema),
    });

    const submit = (formData) => {
            console.log(formData)
    }


    return(
        <DefaultTemplate logoffRoute={logoffRoute} btnName={"Voltar"}  btnHeader={"btnRegister"} classHeader={classHeader} >
            
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <h2 className="title-1">Crie sua conta</h2>
                <p className="headineGray">Rapido e grátis, vamos nessa</p>
                <Input label={"Nome"} type="text" placeholder="Digite seu nome aqui"  {...register("name")} error={errors.name}/>
                <Input label={"Email"} type="email" placeholder="Digite seu email aqui" {...register("email")} error={errors.email}/>
                <Input label={"Senha"} type="password" placeholder="Digite sua senha aqui" {...register("password")} error={errors.password}/>
                <Input label={"Confirmar Senha"} type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} error={errors.confirmPassword}/>
                <Input label={"Bio"} type="text" placeholder="Fale sobre você" {...register("bio")} error={errors.bio}/>
                <Input label={"Contato"} type="tel" placeholder="Opção de contato" {...register("contact")} error={errors.contact}/>
                <div className={style.div1}>
                    <label className="headine">Selecionar Módulo</label>
                    <select className="paragraph" {...register("module")} error={errors.module}>
                        <option value="Selecione Módulo">Selecione Módulo</option>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo Módulo">Segundo Módulo</option>
                        <option value="Terceiro Módulo">Terceiro Módulo</option>
                        <option value="Quarto Módulo">Quarto Módulo</option>
                        <option value="Quinto Módulo">Quinto Módulo</option>
                    </select>
                </div>

                <ButtonDefault className="buttonPrimaryNegative title-2" type="submit"> Cadastrar </ButtonDefault>
            </form>
         
        </DefaultTemplate>
    )
}