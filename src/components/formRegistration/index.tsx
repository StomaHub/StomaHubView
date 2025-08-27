import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { registerUser } from "../../features/userSlice";
import type { User } from "../../types/types";
import SimpleButton from "../simpleButton/SimpleButton";

export default function FormRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUser = async (user: User) => {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: User = { id: uuidv4(), name, email, phone, password };

    try{
    await createUser(newUser);}
    catch (error){console.log(error)}
    dispatch(registerUser(newUser)); // salva no Redux
    navigate("/user");
  
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 rounded-xl shadow-lg bg-white p-8 w-80"
      >
        <h3 className="text-xl font-semibold text-slate-800 text-center">
          Crie uma conta
        </h3>

        <div className="flex flex-col gap-2">
          <label>Nome</label>
          <input type="text" className="border rounded px-2 py-1" required
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input type="email" className="border rounded px-2 py-1" required
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Telefone</label>
          <input type="tel" className="border rounded px-2 py-1" required
            onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Senha</label>
          <input type="password" className="border rounded px-2 py-1" required
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="bg-emerald-600 hover:bg-emerald-700 text-white 
                        text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <SimpleButton label="Registrar"  />
        </div>

        <p className="text-center">
          Já possui uma conta?{" "}
          <Link to="/login" className="font-bold">Entrar</Link>
        </p>
      </form>
    </div>
  );
}
