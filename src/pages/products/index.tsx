import React, { useState } from "react";
import Card from "../../components/card";
import NavBarLinks from "../../components/navBar/navBarLinks";
import Search from "../../components/search";
import Title from "../../components/titles/Title";
import SimpleButton from "../../components/simpleButton/SimpleButton";
import { Plus } from "lucide-react";
import useFetch from "../../hook/useFetch";
import type { Products } from "../../types/types";
import ProductForm from "./productForm";



export default function ProductsPage() {
  const [showFormProduct, setShowFormProduct] = useState(false);
  const [product, setProduct]= useState<Products[]>([]);
  const [filterCategory, setFilterCategoy] =useState<string>("Todos os produtos");
  const { data: products, isPending, error, fetchData } = useFetch<Products[]>("http://localhost:3000/products");



  const handleAddProduct = (product: Products) => {
    if (products) {
      fetchData(); // Recarrega a lista do "backend"
    }
  };

  const removeProduct = (id: string) => {
    setProduct((p) => p.filter((p) => p.id !== id));
  };

 {/* const filterCProducts = products?.filter( (p)=>
      (filterCategory === "Todos os produtos " || p.category=== filterCategory) &&
      p.name
);*/}


  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <NavBarLinks />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <Title
            title="Catálogo de Produtos"
            description="Encontre produtos de qualidade para ostomizados, com avaliações reais de outros usuários e fornecedores confiáveis."
          />
        </div>

        <div className="rounded-xl p-4 mb-8">
          
          <Search
            comboBox={["Todos os produtos","Bolsas coletoras","Cuidados com a pele","Acessórios","Irrigação"]}
            placeholder="Pesquisar produtos"
          />
        </div>

        <div className="flex items-center justify-center mb-6">
          <div
            className="flex border rounded px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white 
            text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setShowFormProduct(true)}
          >
            <Plus size={30} />
            <SimpleButton label="Cadastrar produto" />
          </div>
        </div>

        {showFormProduct && (
          <ProductForm
            close={() => setShowFormProduct(false)}
            add={handleAddProduct}
            fetch={{ data: products, isPending, error, fetchData }}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-8">
          {isPending && <p>Carregando produtos...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {products && products.length > 0 ? (
            products.map((p) => <Card amount={0} dateAddition={""} status={"ativo"} key={p.id} {...p} />)
          ) : (
            <p className="text-center col-span-3">Nenhum produto encontrado</p>
          )}
        </div>
      </div>
    </section>
  );
}
