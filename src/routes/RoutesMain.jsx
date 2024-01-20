import { Route, Routes} from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage, NotFoundPage } from "../pages/index.js";
import { ProtectedRoutes} from "./protectedRoutes";
import { PublicRoutes } from "./publicRoutes";
import { TechProvider } from "../providers/TechContext.jsx";


export const RoutesMain = () =>{

    return(
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard"  element={<TechProvider><DashboardPage/></TechProvider>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}