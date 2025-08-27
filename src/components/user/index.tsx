import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import { logoutUser } from "../../features/userSlice";
import SimpleButton from "../simpleButton/SimpleButton";

export default function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="bg-[#F5F9FD] px-8 py-8 flex items-center flex-col min-h-screen">
      <p className="text-lg font-bold text-slate-800 mb-2">
        Olá, {user?.name}!
      </p>
      <span className="text-lg font-semibold text-slate-800 mb-1">
        Aproveite o OstomyCare
      </span>
      <span className="text-lg font-semibold text-slate-600 mb-4">
        Acesse materiais educativos e registre a sua evolução!
      </span>

      <div
        onClick={handleLogout}
        className="mt-6 w-32 bg-emerald-600 hover:bg-emerald-700 text-white 
                   text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex justify-center"
      >
        <SimpleButton label="Sair" />
      </div>
    </div>
  );
}
