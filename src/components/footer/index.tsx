import { Heart } from "lucide-react";
import FooterDescription from "../footerNav/footerDescription";
import FooterLinks from "../footerNav/footerLinks";
import FooterLegal from "../footerNav/footerLegal";

export default function Footer() {
    return (
          <footer className="bg-slate-800 text-white py-12">
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
                {name: "Início", path:"/biblioteca"},
                {name: "Biblioteca", path:"/biblioteca"},
                {name: "Produtos", path:"/biblioteca"},
                {name: "Monitoramento", path:"/biblioteca"},
                {name: "Diário", path:"/biblioteca"},
                {name: "Especialistas", path:"/biblioteca"},
                {name: "Login", path:"/biblioteca"},

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

        <FooterLegal text="© 2024 OstomyCare. Todos os direitos reservados."/>
    </footer>
    )
}