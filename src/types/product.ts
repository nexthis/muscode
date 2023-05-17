

export interface Product { 
    id: number,
    image: string,
    name: string, 
    price: number,
    currency: "$" | "PLN" | "EUR", // or add currency type as global 
    specialOffer: number,
}