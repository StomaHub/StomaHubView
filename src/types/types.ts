export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
  button: string;
  buttonDelete: string;
};

 export type Doctor = {
    id:string;
    name: string,
    email: string,
    observation: string
}

export type User ={
    id:string;
    name:string;
    email:string;
    phone:string;
    password:string;
}