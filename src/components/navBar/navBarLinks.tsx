import { Book, Package, Check, Calendar, Heart } from "lucide-react";
import NavBar from "./index.tsx";


export default function NavBarLinks() {
  return (
    <NavBar
      titulo="OstomyHub"
      icone={Heart}
      listaNav={[
        { nome: "Início", icone: Heart, path: "/" },
        { nome: "Biblioteca", icone: Book, path:"/libary" },
        { nome: "Produtos", icone: Package, path:"/produtos" },
        { nome: "Monitoramento", icone: Check, path:"/monitoramento" },
        { nome: "Diário", icone: Calendar, path:"/daily" },
      ]}
    />
  );
}
