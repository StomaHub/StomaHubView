import DoctorCard from "./dailyHistoryCard";
import "./styles.css"

export default function DoctorList() {
    return (
        <section className="daily-history-section grow-[1]">
            <div className="title-container flex justify-left gap-[10px]">
                <img src="/icons/pageLine.svg" alt="historico" />
                <h2>Especialistas cadastrados</h2>
            </div>
                <div className="cards-history-section flex flex-col gap-[30px]">
                    <DoctorCard
                        email="caua@gmail.com"
                        name="Cauã Pires Soares"
                        observation=""
                    />

                    <DoctorCard
                        email="lariany@gmail.com"
                        name="Lariany Alves de Sousa"
                        observation="Diva"
                    />
                </div>
        </section>
    );
}