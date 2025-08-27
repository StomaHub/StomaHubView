import "../../styles.css";
import { useState } from "react";

type ReportProps = {
    title: string;
    description: string;
    type: "grave" | "moderado";
}

function CardReport({ title, description, type }: ReportProps) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const colorCard = type === "grave" ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200";

    const handleReportClick = async () => {
        setLoading(true);
        setMessage("");
        
        try {
            const reportData = {
                titulo: title,
                descricao: description,
                tipo: type,
                data: new Date().toISOString(),
                status: "pendente"
            };



            const response = await fetch('http://localhost:3000/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reportData)
            });


            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erro ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            
            setMessage(" Reporte enviado com sucesso!");
        
            
        } catch (error: any) {
            const errorMessage = error.message || "Erro desconhecido";
            setMessage(` Erro: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${colorCard} rounded-xl border w-full p-4 flex flex-col gap-2`}>
            <div className="flex flex-col gap-1">
                <span className="font-semibold">{title}</span>
                <p className="text-gray-700 text-sm">{description}</p>

                <div className="flex justify-between items-center mt-2">
                    {message && (
                        <span className={`text-sm font-medium ${
                            message.includes("✅") ? "text-green-600" : "text-red-600"
                        }`}>
                            {message}
                        </span>
                    )}
                    
                    <button 
                        onClick={handleReportClick}
                        disabled={loading}
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "Enviando..." : "Reportar"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardReport;