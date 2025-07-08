import { Book, Package, Check, Calendar, Heart, Phone, User } from "lucide-react";
import NavBar from "./index.tsx";


export default function NavBarLinks() {

  const logo= "./logo.png"
  return (
    <NavBar
      titulo="OstomyHub"
      iconeLogo={logo}
      listaNav={[
        { nome: "Início", icone: Heart, path: "/" },
        { nome: "Biblioteca", icone: Book, path:"/libary" },
        { nome: "Produtos", icone: Package, path:"/products" },
        { nome: "Monitoramento", icone: Check, path:"/monitoring" },
        { nome: "Diário", icone: Calendar, path:"/daily" },
        { nome: "Especialistas", icone: Phone, path:"/expert" },
        { nome: "Login", icone: User, path:"/login" },
      ]}
    />
  );
}
