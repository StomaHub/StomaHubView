
import { Outlet } from "react-router-dom";

export default function LoginPage(){
    return(
    <section className="bg-[#F5F9FD] min-h-screen flex items-center justify-center">
        {/* corresponde ao aninhamento das rotas  */}
        <Outlet/> 
    </section>
    )
}