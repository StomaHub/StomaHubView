import { Book, Package, Check, Calendar, Heart, Phone, User } from "lucide-react";
import NavBar from "./index.tsx";


export default function NavBarLinks() {

  return (
    <NavBar
      titulo="OstomyHub"
      icone={Heart}
      listaNav={[
        { nome: "Início", icone: Heart, path: "/" },
        { nome: "Biblioteca", icone: Book, path:"/libary" },
        { nome: "Produtos", icone: Package, path:"/products" },
        { nome: "Monitoramento", icone: Check, path:"/monitoring" },
        { nome: "Diário", icone: Calendar, path:"/daily" },
        { nome: "Especialistas", icone: Phone, path:"/expert" },
        { nome: "Área do Usuário", icone: User, path:"/user" },
      ]}
    />
  );
}
