import { createContext, useContext, useState } from "react";
import { api} from "../services/Api.js";
import { UserContext } from "./UserContext.jsx";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({children}) =>{

    const [openModal, setOpenModal] = useState(false);

    const [openEditModal, setOpenEditModal] = useState(false);

    const {listTechs, setListTechs, authHeader} = useContext(UserContext);

    const [techEdit, setTechEdit] = useState(null);

    const loGoOut= true;

    const createTech = async (techData) => {
        try {
            const {data} = await api.post('/users/techs', techData, authHeader);

            setListTechs([...listTechs, data]);
            toast.success("Tech adicionada com sucesso!")
            setOpenModal(false);
        } catch (error) {
                    console.log(error)
                }
    }

    const deleteTechs = async (techId) =>{
        try {
            await api.delete(`/users/techs/${techId}`, authHeader);

            const newTechList = listTechs.filter(tech => tech.id !== techId);
            setListTechs(newTechList)
            toast.success("Tech deletada com sucesso!")

        } catch (error) {
            console.log(error)
        }
    }

    const editTech = async(editData) =>{
        try {
            const newEditTech = {...techEdit, ...editData};
            const {data} = await api.put(`/users/techs/${newEditTech.id}`, newEditTech, authHeader);

            const newTechList = listTechs.map((tech) =>{
                if(tech.id === newEditTech.id){
                    return data
                } else{
                    return tech
                }
            })

            setTechEdit(null);
            setListTechs(newTechList);
            toast.success("Tech atualizada com sucesso!");
                } catch (error){
            console.log(error)
        }
    }


    return(
        <TechContext.Provider value={{
            listTechs,
            setListTechs,
            createTech,
            openModal,
            setOpenModal,
            loGoOut,
            deleteTechs,
            editTech,
            techEdit,
            setTechEdit,
            openEditModal,
            setOpenEditModal
            }}>
            {children}
        </TechContext.Provider>
    )
}