import useFetch from "../../hook/useFetch";
import DoctorCard from "./dailyHistoryCard";
import "./styles.css"

export default function DoctorList() {
    //json-server
    const { data:expert, isPending, error } = useFetch('http://localhost:3000/expertform');

    return (
        <section className="daily-history-section grow-[1]">
            <div className="title-container flex justify-left gap-[10px]">
                <img src="/icons/pageLine.svg" alt="historico" />
                <h2>Especialistas cadastrados</h2>
            </div>

            <div className="cards-history-section flex flex-col gap-[30px]">
                {isPending && <p>Carregando especialistas...</p>}
                {error && <p className="text-red-500">Erro: {error}</p>}

                {expert && expert.map((expert: any) => (
                    <DoctorCard
                        id={expert.id}
                        email={expert.email}
                        name={expert.name}
                        observation={expert.observation}                   />
                ))}
            </div>
        </section>
    );
}
