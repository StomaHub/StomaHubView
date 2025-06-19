import { NavLink } from "react-router-dom";
import "../../../styles.css";


interface LinksFooter {
  name: string;
  path:string;
}
interface ILinks{
    title:string;
    links:LinksFooter[];
}

export default function FooterLinks({title, links}: ILinks){
    return(
        <div>
            <h3 className="font-semibold mb-4">{title}</h3>

            <ul className="space-y-2 text-slate-300">
               {links.map((link,index)=>(
                  <li className="hover:text-emerald-400 transition-colors" key ={index}>
                    <NavLink to= {link.path}> 
                    {link.name}
                    </NavLink>
                  </li>
               ))}
             
            </ul>
        </div>
    );
}