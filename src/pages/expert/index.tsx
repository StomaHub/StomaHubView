import DoctorForm from "../../components/doctorForm";
import Navegation from "../../components/navBar/navBarLinks";
import Title from "../../components/title/Title";
import "./styles.css"

export default function Expert() {
    return (
        <section className="expert-container bg-[#F5F9FD]">
            <Navegation />

            <Title
                title="Especialistas"
                description="Adicione aqui os especialistas que o atendem. Nosso objetivo é garantir uma comunicação clara, direta e eficiente com cada um deles."
            />

            <section className="flex px-[80px]">
                <DoctorForm />
            </section>

        </section>
    );
}