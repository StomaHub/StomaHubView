
type Subtitle ={
    title:string;
    description: string;
}

export default function Subtitle({title, description}: Subtitle){
    return(
        <div className="flex justify-center flex-col">
            <h3 className="font-medium text-slate-800 mb-4">{title}</h3>
            <p className="text-slate-600 mb-6">{description}</p>
        </div>
    )
}