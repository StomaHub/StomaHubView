import { Heart } from "lucide-react";
import FooterDescription from "../../components/footerNav/footerDescription";
import FooterLegal from "../../components/footerNav/footerLegal";
import FooterLinks from "../../components/footerNav/footerLinks";
import Navegation from "../../components/navBar/navBarLinks";
import User from "../../components/user";
export default function UserPage(){
    return(

        <div className=" bg-[#F5F9FD]">
            <Navegation/>
            
            <User/>


            <footer className="bg-slate-800 text-white py-12 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterDescription
            title="OstomyHub"
            icon={Heart}
            description="Dedicados a oferecer o melhor suporte e informação para
            pessoas ostomizadas e seus cuidadores, promovendo qualidade de vida e bem-estar."/>


                <FooterLinks
                title="Links rápidos"
                links={[
                    {name: "Biblioteca", path:"/biblioteca"},
                    {name: "Biblioteca", path:"/biblioteca"},
                    {name: "Biblioteca", path:"/biblioteca"},
                    {name: "Biblioteca", path:"/biblioteca"},

                ]}
                />

                <FooterLinks
                title="Suporte"
                links={[
                    {name: "Central de ajuda", path:"/biblioteca"},
                    {name: "Fale conosco", path:"/biblioteca"},
                    {name: "Termos de uso", path:"/biblioteca"},
                    {name: "Privacidade", path:"/biblioteca"},
                ]}
                />
                </div>
            </div>

        <FooterLegal text="© 2025 OstomyCare. Todos os direitos reservados."/>
        </footer>
    </div>
    )
}