
import "../../styles.css"
import {  type LucideIcon } from "lucide-react";

type ButtonProps = {
    icon: LucideIcon;
    label: string;
    description: string;

}


 export default function Button( {icon:Icon, label, description}: ButtonProps) {
  return (
    <button className="h-28 w-160 bg-white text-black font-semibold rounded-lg min-h-fit flex flex-row">
        <div className="bg-[#c8f5cd] rounded-lg w-12 h-12 flex items-center justify-center mr-[2%] ml-[2%] mt-[7%] mb-[5%]">
           <Icon className="h-10 w-10" />
        </div>
        <div className="flex flex-row mt-[2%] mb-[2%] w-full h-full ">
            <div className="display: flex flex-col ml-[2%] mr-[2%] text-left">
                <div className="mt-[2%] mb-[2%]">
                    <span className="text-[20px] font-bold">{label}</span>
                </div> 
                <div className="w-full overflow-hidden ">
                    <span className="text-[15px]">{description}</span>
                </div>
            </div>        
        </div>
    </button> 
  );
}

