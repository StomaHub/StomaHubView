
import Card from "../../components/card";
import NavBarLinks from "../../components/navBar/navBarLinks";
import Search from "../../components/search";
import Title from "../../components/titles/Title";


export default function ProductsPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div>
        <NavBarLinks />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         
          <div className="text-center mb-12">
            <Title
              title="Catálogo de Produtos"
              description="Encontre produtos de qualidade para ostomizados, 
                com avaliações reais de outros usuários e fornecedores confiáveis."
            />
          </div>

          <div className="rounded-xl p-4 mb-8">
            <Search
              comboBox={["Todos os produtos","Bolsas coletoras","Cuidados com a pele","Acessórios","Irrigação",]}
              placeholder="Pesquisar produtos"
            />
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-8">
            <Card
              img="/bolsa.webp"
              imgDescription="teste"
              title="Bolsa coletora convexa premium"
              place="OstomyMed"
              description="Bolsa de alta qualidade com sistema anti-vazamento e conforto superior."
              price="R$ 45,00"
              buttonTitle="Comprar"
            />
            <Card
              img="teste.png"
              imgDescription="teste"
              title="Bolsa coletora convexa premium"
              place="OstomyMed"
              description="Bolsa de alta qualidade com sistema anti-vazamento e conforto superior."
              price="R$ 45,00"
              buttonTitle="Comprar"
            />
            <Card
              img="teste.png"
              imgDescription="teste"
              title="Bolsa coletora convexa premium"
              place="OstomyMed"
              description="Bolsa de alta qualidade com sistema anti-vazamento e conforto superior."
              price="R$ 45,00"
              buttonTitle="Comprar"
            />
            <Card
              img="teste.png"
              imgDescription="teste"
              title="Bolsa coletora convexa premium"
              place="OstomyMed"
              description="Bolsa de alta qualidade com sistema anti-vazamento e conforto superior."
              price="R$ 45,00"
              buttonTitle="Comprar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
