import "./styles.css"


//Formato das propriedades utilizadas nesse componete
type DailyHistoryCardProps = {
    // data de adição do registro
    date: string,

    // sintomas relatados pelo usuário
    symptoms: string,

    // humor do usário no dia
    humor: string,

    // alguma observação reportada pelo usuário
    observation: string
}

export default function DailyHistoryCard(data: DailyHistoryCardProps) {
    return (
        <section className="card-history-container">
            <div className="title-card-hisory flex justify-left gap-[10px]">
                <img src="/icons/calendar.svg" alt="data" />
                <p className="">{data.date}</p>
            </div>

            <div className="info-card-container flex flex-col gap-[10px] ">
                <div className="flex gap-[100px]">
                    <p>
                        <span>Sintomas</span>: {data.symptoms}
                    </p>

                    <p>
                        <span>Humor:</span> {data.humor}
                    </p>
                </div>
                
                <p>
                    <span>Observações:</span> {data.observation}
                </p>
            </div>
        </section>
    );
}