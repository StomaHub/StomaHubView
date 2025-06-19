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
    return (
        <section className="libary-post-container max-w-[380px]">
            <div className="flex flex-row gap-[10px] items-start">
                <img src={data.iconPath} alt="icon" />
                <div className="grow-1">
                    <p className="libary-card-title">{data.title}</p>
                    <p className="text-gray-600 text-[.90rem] mt-[10px]">{data.resume}</p>
                </div>
            </div>
            <div className="flex flex-col text-gray-600 text-[.80rem] mt-[18px]">
                <p>{data.author}</p>
                <p>{data.date}</p>
            </div>
        </section>
    )
}