import { createContext, useEffect } from "react";
import { api} from "../services/Api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const TodoContext = createContext({});

export const TodoProvider = ({children}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    
    const [showEyePassword, setShowEyePassword] = useState(false);

    useEffect(() =>{
        const loadUser = async () =>{

          const token = localStorage.getItem("@TOKEN");
    
          if(token){
            try {
                const {data} = await api.get(`/profile`, {
                    headers:{
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(data);
                setUser(data);
                console.log(user)

                navigate("/dashboard");
                
            } catch (error) {
                console.log(error)  
            }
        }       
    };
    
    loadUser();

    }, []);

    const userRegister = async (formData) =>{
        try {
            const {data} = await api.post("/users", formData);
            toast.success(`Usuário(a) ${data.name} cadastrado(a) com sucesso!`);
            navigate("/");

        } catch (e) {
            toast.error("Usuário(a) já cadastrado(a).");
            console.log(e);
        }
    }

    const userLogin = async (formData) =>{
        try {
            const {data} = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            toast.success("Usuário logado com sucesso");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Usuário ou senha invalida");
            console.log(error);
        }
    }

    const logoff = () =>{
        localStorage.removeItem("@TOKEN");
        toast.success("Usuário foi deslogado");
        setUser(null);
        navigate("/");
    }

    const onSubmitRegister = (formData) => {
        userRegister(formData);
    }

    const onSubmitLogin = (formData) => {
        userLogin(formData);
    }

    
    const btnRegisterUser = () =>{
        navigate("/register");
    }

    const logoffRoute = () =>{
        navigate("/");
    }

    


    return(
        <TodoContext.Provider 
        value={{
            showEyePassword, 
            setShowEyePassword, 
            onSubmitRegister, 
            onSubmitLogin,
            btnRegisterUser,
            logoff,
            logoffRoute,
            user
            }}>

            {children}

        </TodoContext.Provider>
    )
}