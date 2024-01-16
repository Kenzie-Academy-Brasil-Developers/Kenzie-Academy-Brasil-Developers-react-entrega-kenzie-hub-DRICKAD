import { Route, Routes} from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage, NotFoundPage } from "../pages/index.js";
import { ProtectedRoutes} from "./protectedRoutes";
import { PublicRoutes } from "./publicRoutes";


export const RoutesMain = () =>{

    return(
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard"  element={<DashboardPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}