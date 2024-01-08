import { DefaultTemplate, FormRegister} from "../../components/components.js";


export const RegisterPage = () =>{
    const classHeader = true;

    return(
        <DefaultTemplate btnName={"Voltar"}  btnHeader={"btnRegister"} classHeader={classHeader} >
            
           <FormRegister/>
         
        </DefaultTemplate>
    )
}