import DailyHistoryCard from "./dailyHistoryCard";
import "./styles.css";
import useFetch from "../../hook/useFetch";

export default function DailyHistory() {
    
    const { data: daily, isPending, error } = useFetch('http://localhost:3000/daily');
    
    return (
        <section className="daily-history-section">
            <div className="title-container flex justify-left gap-[10px]">
                <img src="/icons/pageLine.svg" alt="historico" />
                <h2>Histórico de entradas</h2>
            </div>

            <div className="cards-history-section flex flex-col gap-[30px]">
                {isPending && <p>Carregando diário...</p>}
                {error && <p className="text-red-500">Erro: {error}</p>}
                
                {daily && daily.map((daily: any) => (
                    <DailyHistoryCard
                        key={daily.id}
                        date={daily.date}
                        symptoms={daily.symptoms} 
                        humor={daily.humor}
                        observation={daily.observation}     
                    />
                ))}
            </div>
        </section>
    );
}
