import { useState } from "react";
import SimpleButton from "../simpleButton/SimpleButton";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

//Usamos o useContext ´para compartilhar os dados, no caso o nome, do usuário por toda a aplicação
export default function FormRegistration(){
    const [name, setName]=useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [password, setPassword]= useState('');

    //usando o context
    const{setName: setUserName}= useUserContext();
    const navigate= useNavigate();

    const handleSubmit=(event :React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        //salva o nome no nosso context
        setUserName(name);

        //vquando o usuario clicar em registar, o hook o levará para a tela da area do usuário
        navigate("/user");
        console.log("Registrado", {name, email, phone})
    }

    return(
        <div className="flex justify-center items-center">

           <form onSubmit={handleSubmit} className="flex flex-col gap-10 rounded-xl shadow-lg bg-white p-8 w-80">
             <div className="flex justify-center  items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-800">Crie uma conta</h3>
            </div>

            <div className="flex flex-col gap-2">
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome"
                className="border rounded px-2 py-1"
                onChange={(e)=> setName(e.target.value)}
                required
                />
            </div>

            <div className="flex flex-col gap-2">
                <label>Email</label>
                <input type="email" placeholder="Digite seu email"
                onChange={(e)=>setEmail(e.target.value)}
                className="border rounded px-2 py-1"
                required
                 />
            </div>

            <div className="flex flex-col gap-2">
                <label>Telefone</label>
                <input type="tel" placeholder="Digite seu número de telefone"
                onChange={(e)=>setPhone(e.target.value)}
                required
                className="border rounded px-2 py-1" />
            </div>

            <div className="flex flex-col gap-2">
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" 
                onChange={(e)=>setPassword(e.target.value)}
                className="border rounded px-2 py-1"/>
            </div>

            <div className="border rounded px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white 
                            text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <SimpleButton label="Registrar"/>
            </div>

            <div className="flex justify-center  items-center gap-2">
                <p>Já possui uma conta?
                    <Link to="/login" className="font-bold">Entrar</Link>
                </p>
            </div>

           </form>
        </div>
    )
}