import style from "./style.module.scss";
import logo from "../../assets/logoKenzieHub.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import {Input, ButtonDefault, FormLoginSchema } from "../../Components/components.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const LoginPage = () =>{
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const userLogin = () =>{
        setIsLogin(true);
        localStorage.setItem("@LOGIN", "true");
        navigate("/dashboard");
    }

    const userRegister = () =>{
        navigate("/register");
    }

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormLoginSchema),
    });


    const submit = (formData) => {
            console.log(formData)
    }


    return(
            
            <div className={style.container}>
                <img src={logo} alt="" />

                <form className= {style.form} onSubmit={handleSubmit(submit)}>
                    <div className={style.div1}>
                        <h2 className= "title-1" >Login</h2>
                        <Input label={"Email"} type="text" placeholder="Digite seu email aqui"{...register("email")} error ={errors.email}/>
                        <Input label={"Senha"} type="password" placeholder="Digite sua senha aqui" {...register("password")}  error ={errors.password}/>
                        <ButtonDefault className="buttonPrimary title-2" type="submit"> Entrar </ButtonDefault>
                    </div>
                    <div className={style.div2}>
                        <p className="headineBold">Ainda não possui uma conta?</p>
                        <ButtonDefault className="buttonDisabled title-2" type="submit" onClick={userRegister}> Cadastre-se </ButtonDefault>
                    </div>
                </form>
            </div>
        
    )
}
// onClick={userLogin}