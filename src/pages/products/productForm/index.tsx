import React, { useState } from "react";
import type { UseFetchResult } from "../../../hook/useFetch";
import type { Product as Products} from "../../../../src/types/types";
import { v4 as uuidv4 } from "uuid";


interface ProductFormProps {
  close: () => void;
  add: (product: Products) => void;
  fetch: UseFetchResult<Products[]>;
}

export default function ProductForm({ close, add, fetch }: ProductFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: Products = {
      id:uuidv4(),
      name,
      description,
      price,
      image,
      category,
      button: "Comprar",
      buttonDelete: "Excluir" 
    };

    try {
        //métod do useFetch
      await fetch.fetchData({ method: "POST", body: newProduct });
      add(newProduct); // Atualiza a lista no componente
      close();         // Fecha o modal
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
      setCategory("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-opacity-80 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 w-full max-w-md flex flex-col gap-4 shadow-lg">
        <h2 className="text-xl font-semibold text-center">Cadastrar produtos</h2>
        
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} />
        {/*Não funcional*/}
        <input type="text" placeholder="URL da imagem" value={image} onChange={(e) => setImage(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione a categoria</option>
          <option value="Bolsas coletoras">Bolsas coletoras</option>
          <option value="Cuidados com a pele">Cuidados com a pele</option>
          <option value="Acessórios">Acessórios</option>
          <option value="Irrigação">Irrigação</option>
        </select>
        
        <div className="flex justify-center gap-4 mt-4">
          <button type="submit" className="bg-emerald-600 text-white py-2 px-4 rounded">Salvar</button>
          <button type="button" onClick={close} className="bg-gray-300 py-2 px-4 rounded">Cancelar</button>
        </div>
      </form>
    </div>
  );
}
