import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({error, label, ...rest}, ref)=>{

    return(
        <div className={style.container}>
            <label className= {`headine ${style.box}`}>
                {label}
                <div>
                    <input {...rest} ref= {ref} />
                    {error ? <p className= {style.message}>{error.message}</p>: null}
                </div>
            </label>
        </div>
    )
})
