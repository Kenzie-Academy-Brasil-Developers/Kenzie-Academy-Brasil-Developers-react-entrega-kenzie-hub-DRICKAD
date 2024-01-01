import { Header } from "../Header/index.jsx"

export const DefaultTemplate = ({children, btnName, btn, btnHeader, classHeader}) => {
    return(
        <>
        <Header btnName = {btnName} btn ={btn} btnHeader={btnHeader} classHeader={classHeader}/>
        <main>{children}</main>  
        </>
    )
}