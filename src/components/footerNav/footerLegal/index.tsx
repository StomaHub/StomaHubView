
import "../../../styles.css";

interface Footer{
   
    text:string;
}

export default function FooterLegal({text}:Footer){
    return(
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>{text}</p>
        </div>
    )
}