import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../styles.css";

interface ItemNav {
  nome: string;
  icone?: LucideIcon
  path:string;
}

interface NavegationProps {
  titulo: string;
  iconeLogo?: string
  icone?: LucideIcon |string;
  listaNav: ItemNav[];
  // variant?: "navbar" | "footer";
}

export default function NavBar({ titulo, icone: Icon, listaNav }: NavegationProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
        
            {Icon && (
              <Icon className="w-6 h-6 text-emerald-700" />
            )}
            <span className="text-xl font-semibold text-slate-800">{titulo}</span>
          </NavLink>

          <div className="flex-1 flex justify-center">
            <ul className="flex flex-wrap justify-center items-center gap-x-6">
              {listaNav.map((item, index) => {
                const ItemIcon = item.icone;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-emerald-50 transition">
                    {ItemIcon && <ItemIcon className="w-5 h-5 text-slate-700" />}
                    <NavLink to={item.path}className={({isActive})=> 
                        isActive ?
                        "text-slate-700 text-sm font-medium"
                        :"text-slate-700 hover:text-emerald-700 text-sm font-medium"  }
                    >
                      {item.nome} 
                    </NavLink> 
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
