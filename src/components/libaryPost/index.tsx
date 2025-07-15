import { useState } from "react"
import "./styles.css"

//Proprieades esperadas pelo presente componete
type LibaryPostProps = {
    title: string,
    resume: string,
    author: string,
    date: string,
    iconPath: string

}

export default function LibaryPost(data: LibaryPostProps) {
    const INCREMENT = 1

    const [visit, setVisit] = useState(0);

    const handleClick = () => {
        setVisit(visit + INCREMENT);
    }

    return (
        <section className="libary-post-container max-w-[380px]" onClick={handleClick}>
            <div className="flex flex-row gap-[10px] items-start">
                <img src={data.iconPath} alt="icon" />
                <div className="grow-1">
                    <p className="libary-card-title">{data.title}</p>
                    <p className="text-gray-600 text-[.90rem] mt-[10px]">{data.resume}</p>
                </div>
            </div>
            <div className="about-actor">
                <div className="flex flex-col text-gray-600 text-[.80rem] mt-[18px]">
                    <p>{data.author}</p>
                    <p>{data.date}</p>
                </div>

                <p className="acess-on-the-card text-gray-600 text-[.80rem]">Possui {visit} acessos</p>
            </div>
        </section>
    )
}