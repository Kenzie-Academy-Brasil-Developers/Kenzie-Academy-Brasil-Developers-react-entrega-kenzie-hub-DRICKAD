import { ButtonDefault, InputDefault, InputPassword} from "../../components.js";
import { TodoContext } from "../../../providers/TodoContext.jsx";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema } from "./formLoginSchema.js";
import style from "./style.module.scss";

export const FormLogin = () =>{
    const {showEyePassword,
           setShowEyePassword,
           btnRegisterUser,
           onSubmitLogin} = useContext(TodoContext);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(FormLoginSchema),
    });

    return(
        <form className= {style.form} onSubmit={handleSubmit(onSubmitLogin)}>
                    <div className={style.div1}>
                        <h2 className= "title-1" >Login</h2>
                        <div className={style.divLogin}>
                            <InputDefault 
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
                            onClick={btnRegisterUser}> Cadastre-se 
                        </ButtonDefault>
                    </div>
                </form>
    )
}