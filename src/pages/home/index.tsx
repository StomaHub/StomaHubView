import "../../styles.css"
import Navegation from "../../components/navBar/navBarLinks";
import SimpleButton from "../../components/simpleButton/SimpleButton";
import TitleHome from "../../components/titles/tilteHome";
import Title from "../../components/titles/Title";
import Avaliation from "../../components/avaliation";
import Footer from "../../components/footer";

// TODO: Adicionar os cards; 
// Revisar algumas classes que se repetem ver se há uma maneira de fazer de uma melhor forma
//Ajustar as rotas dos links do footer
export default function Home (){
    return (
    <div className="bg-[#F5F9FD]">
        {/* Cabeçalho */}
        <Navegation/>

        {/* Informaçõa textual */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
            <TitleHome 
            titulo="Cuidado e Apoio para" 
            tituloDestaque=" Ostomizados"
            descricao="Uma plataforma completa que oferece informações confiáveis,
            suporte especializado e recursos educacionais para melhorar sua qualidade de
            vida e gestão da saúde.">
            </TitleHome>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                    font-medium ring-offset-background">

                    <div className="focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                    disabled:opacity-50 h-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8
                    py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <SimpleButton 
                        label="Explorar Biblioteca"
                    />
                    </div>

                    <div className="transition-colors focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                    disabled:pointer-events-none disabled:opacity-50 border bg-background 
                    hover:text-accent-foreground h-10 border-emerald-600 text-emerald-600 
                    hover:bg-emerald-50 px-8 py-3 text-lg 
                    rounded-lg">
                    <SimpleButton label="Começar monitoramento"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className="text-center mb-16">
            <Title 
            title="Recursos Essenciais" 
            description="Descubra as ferramentas desenvolvidas especialmente
            para apoiar você em cada etapa do seu cuidado com a estomia."/> 

            {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
        </div> 
    </div>  
    </div>

    {/* Avaliações */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
        <Title
        title="O que nossos usuários dizem"
        description="Depoimentos reais de pessoas que encontraram apoio e informação na nossa plataforma."
        />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Avaliation
                comment="A plataforma mudou minha vida. Agora me sinto mais segura e informada sobre meus cuidados"
                userName="Maria das Dores"
                age={54}
                stars={5} 
                />
            <Avaliation
                comment="O diário de saúde facilitou muito minhas consultas. Os médicos ficam impressionados com o histórico."
                userName="João Paulo"
                age={31}
                stars={5} 
                />
            <Avaliation
                comment="Os materiais educativos são excelentes e me ajudaram muito no pós-operatório."
                userName="Ana Carolina"
                age={69}
                stars={5} 
                />
        </div>
    </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 ">
                <div className="text-white mb-4">
                <Title
                title="Pronto para começar sua jornada de cuidado?"
                description="Junte-se a milhares de pessoas que já encontraram suporte
                e informação na nossa plataforma."
                />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
                <div className=" flex items-center justify-center gap-4 whitespace-nowrap 
                font-medium ring-offset-background transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-emerald-600 
                hover:bg-emerald-50 px-8 py-3 text-lg rounded-lg shadow-lg">
                    <SimpleButton label="Explorar conteúdos"/>
                    <SimpleButton label ="Inicar diário"/>
                </div>
            </div>
        </div>

        {/*  Testando o Footer . TODO: Lembrar de organizar*/}

        <Footer />
    </div>
    )
}