import "../../styles.css";

type CardProps = {
    img: string;
    imgDescription: string;
    title: string;
    place: string;
    description: string;
    price: string;
    buttonTitle: string;
};

export default function Card({img,imgDescription,title,place,description,price,buttonTitle}: CardProps) {
    return (
        <section className="  bg-white rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 group">
         
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={img}
                    alt={imgDescription}
                />
            </div>

           
            <div className="p-6 flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500">{place}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                        {description}
                    </p>
                </div>

             
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{price}</span>

                    <button
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                        <span>{buttonTitle}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
