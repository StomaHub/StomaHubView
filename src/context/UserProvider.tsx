//Provider vai fornecer o contexto para a aplicação
import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";



type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
