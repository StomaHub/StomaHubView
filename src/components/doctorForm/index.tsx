import "./styles.css"
import { useState } from "react";
import useFetch from "../../hook/useFetch";
import { v4 as uuidv4 } from "uuid";

export default function DoctorForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [observation, setObservation] = useState("");
   
    const{fetchData, isPending, error} = useFetch("http://localhost:3000/expertform")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newExpert = { id : uuidv4() ,name, email, observation };

        try{
            await fetchData({method:"POST", body: newExpert});
            alert("Especialista ccadastrado");
            setName("");
            setEmail("");
            setObservation("");
        }
        catch(e){
     }
};
    return (
        <section className="expert-form-container">
            <div className="flex items-center gap-[20px]">
                <img src="/icons/plus.svg" alt="novo" />
                <h2 className="form-expert-add-new">Cadastro especialista</h2>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
                <div className="name-area-form">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Informe o nome do especialista" 
                        required 
                    />
                </div>

                <div className="email-area-form">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite o email do especialista" 
                        required
                    />
                </div>

                <div className="observation-area-form">
                    <label htmlFor="observation">Observação</label>
                    <textarea 
                        id="observation" 
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                        placeholder="Alguma informação sobre o especialista..."
                    ></textarea>
                </div>

                <button className="simple-button" disabled={isPending}>
                    {isPending? "Salvando..." : "Salvar"}
                </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}
        </section>
    );
}
