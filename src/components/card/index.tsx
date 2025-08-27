import "../../styles.css";
import { useState } from "react";


type CardProps = {
    id:string; 
    name: string,
    description: string,
    price: string,
    image: string,
    amount: number,
    dateAddition: string,
    status: "ativo"
};

export default function Card({ id, name, description, image, price, amount,dateAddition, status }: CardProps) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleComprarClick = async () => {
        setLoading(true);
        setMessage("");
        
        try {
            // Dados do produto para enviar ao carrinho
            const productData = {
                id: id,
                name: name,
                description: description,
                price: price,
                image: image,
                amount: 0,
                dateAddition: new Date().toISOString(),
                status: "ativo"
            };

            // Fazendo a requisição POST para o endpoint Carrinho
            const response = await fetch('http://localhost:3000/carrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erro ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            setMessage(" Produto adicionado ao carrinho!");
            
        } catch (error: any) {
            const errorMessage = error.message || "Erro ao adicionar ao carrinho";
            setMessage(`${errorMessage}`);
        } finally {
            setLoading(false);
            
            // Limpar a mensagem após 3 segundos
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };

    return (
        <section className="bg-white rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={image}
                    alt={name}
                />
            </div>

            <div className="p-6 flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                        {description}
                    </p>
                </div>
            </div>

                <div className="flex flex-col gap-2">
                    {message && (
                        <span className={`text-sm font-medium text-center ${
                            message.includes("") ? "text-green-600" : "text-red-600"
                        }`}>
                            {message}
                        </span>
                    )}
                    
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-emerald-600">{price}</span>

                    <button
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                       Comprar
                    </button>

                     <button
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                       Deletar
                    </button>
                </div>
            </div>
        </section>
    );
}