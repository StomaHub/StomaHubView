import "../../styles.css";

type CardProps = {
    name:string;
    description: string;
    image:string;
    price:string;
   
};

export default function Card({name, description, image, price}: CardProps) {
    return (
        <section className="  bg-white rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 group">
         
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={image}
                />
            </div>

           
            <div className="p-6 flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                        {description}
                    </p>
                </div>

             
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
