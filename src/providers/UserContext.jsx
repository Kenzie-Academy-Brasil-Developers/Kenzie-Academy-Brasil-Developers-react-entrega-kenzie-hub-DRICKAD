import { createContext, useEffect } from "react";
import { api} from "../services/Api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const TodoProvider = ({children}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const [listTechs, setListTechs] = useState([]);

    const [showEyePassword, setShowEyePassword] = useState(false);

    const pathname = window.location.pathname;

    const tokenLocal = localStorage.getItem("@TOKEN");
    const [token, setToken] = useState(tokenLocal ? tokenLocal : "");

    const authHeader = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() =>{
        const loadUser = async () =>{  
            if(token){
                try {
                    setLoading(true);
                    
                    const {data} = await api.get("/profile", authHeader);
                    
                    setUser(data);
                    setListTechs(data.techs)
                    navigate(pathname);
                    
                } catch (error) {
                    console.log(error)  
                } finally{
                    setLoading(false)
                }
            }       
        };
        
        loadUser();
        
    }, []);
    
  
    const userRegister = async (formData, reset) =>{
        try {
            const {data} = await api.post("/users", formData);
            reset();
            navigate("/");
            toast.success(`Usuário(a) ${data.name} cadastrado(a) com sucesso!`);

        } catch (e) {
            toast.error("Usuário(a) já cadastrado(a).");
            console.log(e);
        }
    }

    const userLogin = async (formData, reset) =>{
        try {
            const {data} = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            setUser(data.user.techs);
            navigate("/dashboard");
            toast.success("Usuário logado com sucesso");

            reset();
        } catch (error) {
            toast.error("Usuário ou senha invalida");
            console.log(error);
        }
    }

    const logoff = () =>{
        localStorage.removeItem("@TOKEN");
        toast.warning("Usuário foi deslogado");
        setListTechs(null);
        setUser(null);
        navigate("/");
    }
   
    const btnRegisterUser = () =>{
        navigate("/register");
    }

    const logoffRoute = () =>{
        navigate("/");
    }

    return(
        <UserContext.Provider 
        value={{
            showEyePassword, 
            setShowEyePassword,
            userRegister, 
            userLogin,
            btnRegisterUser,
            logoff,
            logoffRoute,
            user,
            loading,
            listTechs,
            setListTechs,
            authHeader
            }}>

            {children}

        </UserContext.Provider>
    )
}