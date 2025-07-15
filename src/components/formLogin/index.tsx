import { useState } from "react";
import SimpleButton from "../buttons/SimpleButton";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function FormLogin(){
    const [email, setEmail]= useState(""); //ambos os estados iniciam vazios (email e password)
    const [password, setPassword]= useState("");


    //usando o Context
    const {setName}= useUserContext();
    const navigate= useNavigate();

    //função para fazer o ennvio do fomulário
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
         //impede que a página siga o padrão de recarregar 
        setName(email) //salva o nome no context, no login ele irá exibir o email
        navigate("/user")
         console.log("teste")
        console.log( email, password)}

    return (
        <section className=" flex justify-center items-center" >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 rounded-xl shadow-lg bg-white p-8 w-80" >
                <div className="flex justify-center  items-center gap-2">
                    <span className="text-xl font-semibold text-slate-800" >OstomyHub</span>
                </div>
            
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input type="email" className="border rounded px-2 py-1" 
                    required
                    placeholder="Digite seu email"
                    //captura as modificações feitas pelo usuário
                    onChange={(event )=> setEmail(event.target.value)}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label>Senha</label>
                    <input type="password" className="border rounded px-2 py-1"
                    required
                    placeholder="Digite sua senha"
                    //captura os dados do input
                    onChange={(event )=> setPassword(event.target.value)}/>
                </div>

                <div className="border rounded px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white 
                            text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <SimpleButton label="Entrar"/>
                </div>

                <div className="flex justify-center  items-center gap-2">
                    <p>Não tem uma conta? 
                        <Link to= "/login/register" className="font-bold">Registrar</Link>
                    </p>
                </div>
        </form>
    </section>
    )
}