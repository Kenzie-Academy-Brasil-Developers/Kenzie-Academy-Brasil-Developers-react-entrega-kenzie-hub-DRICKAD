import { Header } from "../header/index.jsx";

export const DefaultTemplate = ({children, ... rest}, ref) => {
    return(
        <>
        <Header {...rest} />
        <main>{children}</main>  
        </>
    )
}
