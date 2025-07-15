import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import SimpleButton from "../simpleButton/SimpleButton";


export default function User(){
    const {name}= useUserContext();
    const navigate= useNavigate();
    const {setName } = useUserContext();

    function logout(){
        setName("");
        navigate("/login")
    }

    return (
        <div className="bg-[#F5F9FD] px-8 py-26 flex items-center flex-col" >
            <p className="text-lg font-bold text-slate-800 mb-2">Olá, {name}!</p>
            <span className="text-lg font-semibold text-slate-800 mb-1">Aproveite o OstomyHub</span>
            <span className="text-lg font-semibold text-slate-600 mb-1">Acesse materias educativos e registre a sua evolução!</span>
           
                <div onClick={logout} className="mt-6 w-[100px] border px-2 py- bg-emerald-600 hover:bg-emerald-700 text-white 
                    text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                 <SimpleButton label="Sair"/>
                </div>
            </div>
       
    )
}