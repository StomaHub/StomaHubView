import "./styles.css"

export default function DailyForm() {
    return (
        <section className="daily-form-container">
            <div className="flex itens-center gap-[20px]">
                <img src="/icons/plus.svg" alt="novo" />
                <h2 className="form-daily-add-new">Nova Entrada</h2>
            </div>

            {/*apontar para endpoint da nossa API posteriormente*/}
            <form action="#" className="form-container">
                
                <div className="date-area-form">
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" id="date" />
                </div>

                <div className="symptoms-area-form">
                    <label htmlFor="symptoms">Sintomas observados</label>
                    <textarea name="symptoms" id="symptoms"  placeholder="Descreva sintomas, desconforto, alterações..."></textarea>
                </div>

                <div className="observation-area-form">
                    <label htmlFor="observation">Observações gerais</label>
                    <textarea name="observation" id="observation" placeholder="Anotações sobre cuidados, medicamentos, atividades..."></textarea>
                </div>

            </form>
        </section>
    );
}