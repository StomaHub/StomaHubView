import DailyForm from "../../components/dailyForm";
import DailyHistory from "../../components/dailyHistory";
import Navegation from "../../components/navBar/navBarLinks";
import Title from "../../components/titles/Title";
import "./styles.css"

export default function Daily() {
    return (
        <section className="daily-container bg-[#F5F9FD]">
            <Navegation />

            <Title
                title="Diário de Saúde"
                description="Registre sintomas, fotos e observações diárias para acompanhar sua evolução e compartilhar informações precisas com sua equipe médica."
            />

            <section className="content-daily-container px-[80px]">
                <DailyForm />

                <DailyHistory />
            </section>
        </section>
    )
}