
import "../../styles.css";

type ReportProps={
    title:string;
    description:string;
    type: string
}

function CardReport({title, description, type}:ReportProps){
    const colorCard= type === "grave"? "bg-red-50 border-red-200 bg-red-50" : "bg-yellow-50 border-yellow-200 bg-yellow-50";
    return (
         <div className={`${colorCard} rounded-xl border w-full  p-4 flex flex-col gap-2 `}>
           <div className="flex flex-col gap-1">
            <span className="font-semibold">{title}</span>
            <p className="text-gray-700 text-sm">{description}</p>

            <div className="flex justify-end " >
                <button className=" bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition ">Reportar</button>
            </div>
            
           </div>
        </div>
    )
}
export default CardReport;