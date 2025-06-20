import "./styles.css"

export default function DoctorForm() {
    return (
        <section className="expert-form-container">
            <div className="flex itens-center gap-[20px]">
                <img src="/icons/plus.svg" alt="novo" />
                <h2 className="form-expert-add-new">Cadastro especialista</h2>
            </div>

            {/*apontar para endpoint da nossa API posteriormente*/}
            <form action="#" className="form-container">
                
                <div className="name-area-form">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Informe o nome do especialista" required={true} />
                </div>

                <div className="email-area-form">
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email"  placeholder="Digite o email do especialista" required={true}/>
                </div>

                <div className="observation-area-form">
                    <label htmlFor="observation">Observação</label>
                    <textarea name="observation" id="observation" placeholder="Alguma informação sobre o especialista..."></textarea>
                </div>

                <button className="simple-button">
                    Salvar
                </button>

            </form>
        </section>
    );
}