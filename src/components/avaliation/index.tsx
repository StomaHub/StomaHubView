import Stars from "./stars"
import "./styles.css"

//Tipo das propriedades esperadas pelo component
type AvaliationProps = {
    // número de estrelas
    stars: number,

    // comentário do usuário
    comment: string,

    // nome do usuário
    userName: string,

    // idade do usuário
    age: number
}

export default function Avaliation(data: AvaliationProps) {
    return (
        <section className="avaliation-container">
            <div>
                <Stars stars={data.stars}/>
            </div>
            <p className="text-gray-600 text-[.95rem] italic comment">"{data.comment}"</p>
            <div>
                <p className="font-semibold">{data.userName}</p>
                <p className="text-gray-500 text-[.90rem]">{data.age} anos</p>
            </div>
        </section>
    )
}