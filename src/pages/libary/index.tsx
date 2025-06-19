import LibaryPost from "../../components/libaryPost";
import Navegation from "../../components/navBar/navBarLinks";
import Search from "../../components/search";
import Title from "../../components/title/Title";
import "./styles.css"

export default function Libary() {
    return (
        <section className="libary-container bg-[#F5F9FD]">
            <Navegation />

            <section className="px-[80px]">
                <Title
                    title="Biblioteca Informativa"
                    description="Acesse materiais educativos confiáveis, guias práticos e recursos especializados para cuidados com estomia."
                />

                <Search comboBox={["Todos", "Cuidados básicos", "Tutoriais", "Nutrição", "Sinais de alerta"]} placeholder="Pesquisar materiais" />

                <section className="posts-libary-container">
                    <LibaryPost
                        iconPath="/icons/page.svg"
                        title="Guia Completo de Cuidados com Estomia"
                        resume="Manual abrangente sobre os primeiros cuidados e manutenção diária."
                        author="Por: Dra. Maria Silva"
                        date="14/01/2024"/>

                    <LibaryPost
                        iconPath="/icons/play.svg"
                        title="Vídeo: Como Trocar a Bolsa Coletora"
                        resume="Tutorial passo a passo demonstrando a troca segura da bolsa."
                        author="Por: Enf. João Santos"
                        date="09/01/2024"/>

                    <LibaryPost
                        iconPath="/icons/book.svg"
                        title="Alimentação Adequada para Ostomizados"
                        resume="Dicas nutricionais e receitas adaptadas para diferentes tipos de estomia."
                        author="Por: Nut. Ana Costa"
                        date="04/01/2024"/>

                    <LibaryPost
                        iconPath="/icons/galery.svg"
                        title="Galeria: Sinais de Alerta Visuais"
                        resume="Imagens ilustrativas dos principais sinais que requerem atenção médica."
                        author="Por: Equipe Médica"
                        date="19/12/2023"/>
                </section>
            </section>
        </section>
    )
}