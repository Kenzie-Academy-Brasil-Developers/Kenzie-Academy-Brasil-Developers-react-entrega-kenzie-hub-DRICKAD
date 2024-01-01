import style from "./style.module.scss";

export const Input = ({label, type,placeholder})=>{

    return(
        <div className={style.container}>
            <label className="headine" htmlFor="">{label}</label>
            <input className="paragraph" type={type} placeholder= {placeholder} />
        </div>
    )
}