import { DefaultTemplate, Input, TextareaBio, ButtonDefault} from "../../Components/components.js";
import style from "./style.module.scss";

export const RegisterPage = () =>{
    const classHeader = true;

    return(
        <DefaultTemplate btnName={"Voltar"}  btnHeader={"btnRegister"} classHeader={classHeader} >
            
                <form className={style.form}>
                    <h2 className="title-1">Crie sua conta</h2>
                    <p className="headineGray">Rapido e grátis, vamos nessa</p>
                    <Input label={"Nome"} type={"text"} placeholder={"Digite seu nome aqui"}/>
                    <Input label={"Email"} type={"text"} placeholder={"Digite seu email aqui"}/>
                    <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha aqui"}/>
                    <Input label={"Confirmar Senha"} type={"password"} placeholder={"Digite novamente sua senha"}/>
                    <TextareaBio label={"Bio"} type={"text"} placeholder={"Fale sobre você"}/>
                    <Input label={"Contato"} type={"text"} placeholder={"Opção de contato"}/>
                    <div className={style.div1}>
                        <label htmlFor="" className="headine">Selecionar Módulo</label>
                        <select className="paragraph">
                            <option value="Primeiro Módulo">Primeiro Módulo</option>
                            <option value="Segundo Módulo">Segundo Módulo</option>
                            <option value="Terceiro Módulo">Terceiro Módulo</option>
                            <option value="Quarto Módulo">Quarto Módulo</option>
                            <option value="Quinto Módulo">Quinto Módulo</option>
                        </select>
                    </div>

                    <ButtonDefault className="buttonPrimaryNegative title-2" type="submit" nameBtn = {"Cadastrar"}/>
                </form>
         
        </DefaultTemplate>
    )
}