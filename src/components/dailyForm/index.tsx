import "./styles.css"
import { useState } from "react";

export default function DailyForm() {
        const [date, setDate] = useState("");
        const [symptoms, setSymptoms] = useState("");
        const [observation, setObservation] = useState("");
        const [humor, setHumor] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);


        const handleSubmit =async (e: React.FormEvent)=> {
            e.preventDefault();
            setLoading(true);
            setError(null);

            const newDaily = {date, symptoms, humor, observation}
        

            try{
            const res = await fetch("http://localhost:3000/daily",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newDaily),
            });

            if(!res.ok){
                throw new Error ("Erro ao cadastrar no diário!")
            }

            setDate("");
            setSymptoms("");
            setObservation("");
            setHumor("");
            alert("Especialista cadastrado com sucesso!");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="daily-form-container">
            <div className="flex itens-center gap-[20px]">
                <img src="/icons/plus.svg" alt="novo" />
                <h2 className="form-daily-add-new">Nova Entrada</h2>
            </div>

        <form className="form-container" onSubmit={handleSubmit}>    
            <div className="date-area-form">
                <label htmlFor="date">Data</label>
                    <input type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}/>
            </div>

            <div className="symptoms-area-form">
                <label htmlFor="symptoms">Sintomas observados</label>
                    <textarea
                        id="symptoms"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        placeholder="Descreva sintomas, desconforto, alterações..."
                        required
                    ></textarea>
            </div>

            <div className="observation-area-form">
                <label htmlFor="observation">Observações gerais</label>
                    <textarea name="observation" 
                    id="observation" 
                    placeholder="Anotações sobre cuidados, medicamentos, atividades..."
                     onChange={(e) => setObservation(e.target.value)}
                    value={observation}></textarea>
            </div>

               <div className="humor-area-form">
                    <label htmlFor="humor">Humor</label>
                    <textarea name="humor" 
                    id="humor" 
                    placeholder="Muito ruim, Ruim, Neutro, Bom, Ótimo"
                    onChange={(e) => setHumor(e.target.value)}
                    value={humor}></textarea>
                </div>


               <button className="simple-button" disabled={loading}>
                    {loading ? "Salvando..." : "Salvar"}
                </button>
        </form>

                {error && <p className="text-red-500">{error}</p>}
   </section>
          
    );
}