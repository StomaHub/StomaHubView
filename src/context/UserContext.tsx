import { useContext } from "react";
import { createContext } from "react";


//definindo o que será guardado no contexto
type UserContextTYPE ={
    name: string;
    setName: (name:string)=> void;
}

//criando o contexto inicialmente vazio, dando ao providr o valor indefinido
export const UserContext = createContext<UserContextTYPE | undefined>(undefined);

export function useUserContext(){
    const context=useContext(UserContext);

    if(context=== undefined){
        throw new Error ("Erro");
    }

    return context;
}

