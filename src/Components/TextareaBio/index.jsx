import style from "./style.module.scss";

export const TextareaBio = ({label, placeholder}) =>{
    return (
        <div className={style.container}>
            <label className="headine">{label}</label>
            <textarea type="text" placeholder={placeholder}>

            </textarea>
        </div>
        
    )
}