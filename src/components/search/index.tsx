import "./styles.css"

//Propriedades esperadas pelo componente
type SearchProps = {
    comboBox: string[],
    placeholder: string
}

export default function Search(data: SearchProps) {
    //quantidade de itens passados para serem exibidos no combo box
    const comboSize = data.comboBox.length;

    //valores que serão exibidos no combobox
    const comboBoxContent = data.comboBox;

    return (
        <section className="search-container flex justify-between bg-white p-[20px] gap-[15px]">
            <div className="search flex flex-row grow-1">
                <img src="/icons/search.svg" alt="icon" />

                <input className="filter-content w-[100%]" type="text" id="filter" name="filter" placeholder={data.placeholder}/>
            </div>

            <div className="combo-box-container flex">
                <img src="/icons/filter.svg" alt="icon" />

                <select className="combo-container">
                    {Array.from({ length: comboSize }).map((_, i) => (
                        <option
                        key={i}
                        value={comboBoxContent[i]}
                        className="">
                            {comboBoxContent[i]}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    )
}