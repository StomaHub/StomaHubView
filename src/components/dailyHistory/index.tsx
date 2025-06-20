import DailyHistoryCard from "../dailyHistoryCard";
import "./styles.css"

export default function DailyHistory() {
    return (
        <section className="daily-history-section">
            <div className="title-container flex justify-left gap-[10px]">
                <img src="/icons/pageLine.svg" alt="historico" />
                <h2>Histórico de entradas</h2>
            </div>

            <div className="cards-history-section flex flex-col gap-[30px]">
                <DailyHistoryCard
                    date="01/01/2025"
                    humor="Bom"
                    observation="Usei um hidratante no local"
                    symptoms="Leve irritação na pele"  
                />

                <DailyHistoryCard
                    date="15/06/2025"
                    humor="Ótimo"
                    observation="Usei um hidratante no local"
                    symptoms="Leve irritação na pele"  
                />
            </div>
        </section>
    );
}