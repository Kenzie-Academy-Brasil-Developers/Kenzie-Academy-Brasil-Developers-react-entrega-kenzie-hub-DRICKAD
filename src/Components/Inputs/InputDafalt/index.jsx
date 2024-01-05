import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({error, label,...rest}, ref)=>{

    return(
        <div className={style.container}>
            <label className= {`headine ${style.box}`}>
                {label}
                    <input {...rest} ref= {ref}/>
                    <div className={style.span}>
                        {error ? <p className= {style.message}>{error.message} </p>: 
                        <p className={style.spanTransparent}>....................</p>}
                    </div>
            </label>
        </div>
    )
})
