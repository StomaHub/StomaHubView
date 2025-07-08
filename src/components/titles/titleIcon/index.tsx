import {type LucideIcon } from "lucide-react"

type Tilte ={
    icon: LucideIcon;
    title:string;
}

export default function TitleIcon({icon: Icon, title}:Tilte){
    return(
        <div className="flex items-center justify-center gap-2">
            <Icon color="red" size={24} className="align-middle"></Icon>
            <h2 className="font-bold text-2xl">{title}</h2>
        </div>
    )
}