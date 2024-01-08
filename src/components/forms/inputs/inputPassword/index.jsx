import { InputDefault } from "../inputDefault";
import { forwardRef } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import style from "./style.module.scss";


export const InputPassword = forwardRef(({error, setShowEyePassword, showEyePassword, ...rest}, ref) => { 
    return(
        <>
                <InputDefault {...rest} error={error} ref= {ref}/>

                <div className={style.eyeShow} >
                    {showEyePassword ? <FaEye onClick={()=> setShowEyePassword(!showEyePassword)}/> : 
                    <FaRegEyeSlash onClick={()=> setShowEyePassword(!showEyePassword)}/>}
                </div>
        </>
      
    )
})