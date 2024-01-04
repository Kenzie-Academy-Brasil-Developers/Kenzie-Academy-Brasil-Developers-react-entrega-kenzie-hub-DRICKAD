import { Header } from "../Header/index.jsx";

export const DefaultTemplate = ({children, ... rest}, ref) => {
    return(
        <>
        <Header {...rest} />
        <main>{children}</main>  
        </>
    )
}
