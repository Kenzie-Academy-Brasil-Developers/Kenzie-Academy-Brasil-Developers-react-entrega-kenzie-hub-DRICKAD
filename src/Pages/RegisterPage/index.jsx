import { DefaultTemplate, FormRegister} from "../../components/components.js";


export const RegisterPage = () =>{
    
    const classHeader = true;

    return(
        <DefaultTemplate 
        title={"voltar"} 
        aria-label={"back"} 
        btnName={"Voltar"} 
        btnHeader={"btnRegister"} 
        classHeader={classHeader} >
            
           <FormRegister/>
         
        </DefaultTemplate>
    )
}