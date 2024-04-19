export interface signUp{
    status: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface SignIn{
    email: string;
    password: string;
}
export interface Product{
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: string;
}