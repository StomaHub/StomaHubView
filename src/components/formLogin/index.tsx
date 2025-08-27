import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { registerUser } from "../../features/userSlice";
import SimpleButton from "../buttons/SimpleButton";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      id: uuidv4(),
      name: email,
      email,
      phone: "",
      password,
    };

    dispatch(registerUser(user));
    navigate("/user");
  };

  return (
    <section className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 rounded-xl shadow-lg bg-white p-8 w-80"
      >
        <h3 className="text-xl font-semibold text-slate-800 text-center">
          OstomyHub
        </h3>

        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input type="email" className="border rounded px-2 py-1" required
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Senha</label>
          <input type="password" className="border rounded px-2 py-1" required
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="bg-emerald-600 hover:bg-emerald-700 text-white 
                        text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <SimpleButton label="Entrar" />
        </div>

        <p className="text-center">
          Não tem uma conta?{" "}
          <Link to="/login/register" className="font-bold">Registrar</Link>
        </p>
      </form>
    </section>
  );
}
