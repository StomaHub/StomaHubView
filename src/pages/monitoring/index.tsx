import { Bell } from "lucide-react";
import CardReport from "../../components/cardReport"
import Navegation from "../../components/navBar/navBarLinks";
import Title from "../../components/titles/Title";
import TitleIcon from "../../components/titles/titleIcon";
import "./styles.css"
import Subtitle from "../../components/titles/subtitle";

export default function MonitoringPage() {
    return (
        <section className="bg-[#F5F9FD]">

            <Navegation />

            <div className="mt-16 " >
                <Title
                title="Monitoramento de Saúde"
                description="Sistema de alertas para acompanhar sua saúde e identificar
                sinais que requerem atenção médica."/>
            </div>

                <TitleIcon
                icon={Bell}
                title="Sinais de alerta"/>
            

            {/* Alertas */}
            <div className="mt-8 w-1/3 mx-auto bg-white rounded-xl p-6 shadow-sm border 
            border-slate-200  ">
                    
                <Subtitle
                title="Reportar Sinal Crítico"
                description="Se você observar algum destes sinais, reporte 
                imediatamente e procure atendimento médico."/>

                <div className="flex flex-col items-center gap-4">
                  
                    <CardReport
                    title="Sangamento no estoma"
                    description="Sangramento persistente ou em grande quantidade"
                    type="grave"/>

                    <CardReport
                    title="Inchaço Excessivo"
                    description="Estoma muito inchado ou com mudança significativa de tamanho"
                    type="moderado"/>

                    <CardReport
                    title="Mudança de Cor"
                    description="Estoma com coloração azulada, preta ou muito pálida"
                    type="grave"/>

                    <CardReport
                    title="Retração do Estoma"
                    description="Estoma retraído para dentro da pele"
                    type="moderado"/>

                    <CardReport
                    title="Prolapso"
                    description="Estoma muito projetado para fora"
                    type="moderado"/>

                    <CardReport
                    title="Irritação Severa da Pele"
                    description="Vermelhidão intensa, feridas ou infecção na pele"
                    type="grave"/>
                </div>  
          </div>  
        </section>
    )
}