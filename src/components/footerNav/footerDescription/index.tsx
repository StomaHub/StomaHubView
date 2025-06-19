import type { LucideIcon } from "lucide-react";
import "../../../styles.css";

interface IDescription {
    title:string;
    icon: LucideIcon;
    description: string;
}

export default function FooterDescription({title, icon :Icon, description}:IDescription){
    return(
        <div className="col-span-1 md:col-span-2">  
            <div className="flex items-center space-x-2 mb-4">
                <Icon className="w-6 h-6 text-emerald-700"/>
                <span className="text-xl font-semibold">{title}</span>
            </div>
         
           <p className="text-slate-300 mb-4">{description}</p> 
        </div>
    )
}