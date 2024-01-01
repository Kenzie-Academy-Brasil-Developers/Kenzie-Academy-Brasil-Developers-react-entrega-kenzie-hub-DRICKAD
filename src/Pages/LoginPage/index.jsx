import { DefaultTemplate, Input, ButtonDefault } from "../../Components/components.js";
import style from "./style.module.scss";
import logo from "../../assets/logoKenzieHub.svg";

export const LoginPage = () =>{
    return(
            
            <div className={style.container}>
                <img src={logo} alt="" />

                <form className= {style.form}>
                    <div className={style.div1}>
                        <h2 className= "title-1" >Login</h2>
                        <Input label={"Email"} type={"text"} placeholder={"Digite seu email aqui"}/>
                        <Input label={"Senha"} type={"password"} placeholder={"Digite sua senha aqui"}/>
                        <ButtonDefault className="buttonPrimary title-2" type="submit" nameBtn = {"Entrar"}/>
                    </div>
                    <div className={style.div2}>
                        <p className="headineBold">Ainda não possui uma conta?</p>
                        <ButtonDefault className="buttonDisabled title-2" type="submit" nameBtn = {"Cadastre-se"}/>
                    </div>
                </form>
            </div>
        
    )
}