import DoctorForm from "../../components/doctorForm";
import DoctorList from "../../components/doctorList";
import Navegation from "../../components/navBar/navBarLinks";
import Title from "../../components/titles/Title";
import "./styles.css"

export default function Expert() {
    return (
        <section className="expert-container bg-[#F5F9FD]">
            <Navegation />

            <Title
                title="Especialistas"
                description="Adicione aqui os especialistas que o atendem. Nosso objetivo é garantir uma comunicação clara, direta e eficiente com cada um deles."
            />

            <section className="flex justify-between px-[80px] gap-[80px]">
                <DoctorList />
                
                <DoctorForm />
            </section>

        </section>
    );
}