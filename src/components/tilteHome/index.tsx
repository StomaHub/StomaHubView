import "../../styles.css";
interface Title {
    titulo:string;
    tituloDestaque:string;
    descricao:string;

}

export default function TitleHome({titulo, tituloDestaque, descricao}: Title){
    return(
        <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                {titulo} 
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                    { tituloDestaque}
                </span>
            </h1>
           
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                {descricao}
            </p>
        </div>
    )
    
}