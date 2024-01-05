import { ButtonDefault, Input, InputPassword, api } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormLoginSchema } from "./formLoginSchema";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";



export const FormLogin = ({setUser}) =>{

    const [showEyePassword, setShowEyePassword] = useState(false);

    const navigate = useNavigate();
    
    const registerUser = () =>{
        navigate("/register");
    }


    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormLoginSchema),
    });

    const userLogin = async (formData) =>{
        try {
            const {data} = await api.post("/sessions", formData);
            setUser(data.user);
            localStorage.setItem("@UserToken", JSON.stringify(data.token))
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (formData) => {
        userLogin(formData);
    }

    return(
        <form className= {style.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.div1}>
                        <h2 className= "title-1" >Login</h2>
                        <div className={style.divLogin}>
                            <Input 
                                label={"Email"} 
                                type="text" 
                                placeholder="Digite seu email aqui"
                                {...register("email")} 
                                error ={errors.email}
                            />

                            <InputPassword 
                                label={"Senha"}
                                showEyePassword = {showEyePassword}
                                setShowEyePassword={setShowEyePassword} 
                                type= {showEyePassword? "text": "password"}
                                placeholder="Digite sua senha aqui" 
                                {...register("password")} 
                                error ={errors.password}
                            />
                        </div>
                        <ButtonDefault 
                        className="buttonPrimary title-2" 
                        type="submit"> Entrar 
                        </ButtonDefault>
                    </div>

                    <div className={style.div2}>
                        <p className="headineBold">Ainda não possui uma conta?</p>
                        <ButtonDefault 
                            className="buttonDisabled title-2" 
                            type="submit" 
                            onClick={registerUser}> Cadastre-se 
                        </ButtonDefault>
                    </div>
                </form>
    )
}