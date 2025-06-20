import "./styles.css"

//Formato das propriedades utilizadas nesse componete
type DoctorCardProps = {
    // nome do especialista
    name: string,

    // email de contato do especialista
    email: string,

    // observação realizada sobre o especialista
    observation: string
}

export default function DoctorCard(data: DoctorCardProps) {
    return (
        <section className="card-doctor-container">
            <div className="title-card-doctor flex justify-left gap-[10px]">
                <img src="/icons/calendar.svg" alt="data" />
                <p className="">{data.name}</p>
            </div>


            <div className="info-container-doctor flex flex-col gap-[10px]">
                <p>
                    <span>Email</span>: {data.email}
                </p>
                <p>
                    <span>Observação:</span> {data.observation}
                </p>
            </div>
        </section>
    );
}