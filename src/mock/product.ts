import IPhone from "@/assets/images/img1.png"
import IPad from "@/assets/images/img2.png"
import MackBook from "@/assets/images/img3.png"

import type { Product } from "@/types/product";


export function list(): Array<Product>{
    return [
        {
            id: 1,
            image: IPhone,
            name: "iPhone 6s Plus 16GB",
            price: 1000,
            specialOffer: 649,
            currency: "$",
        },
        {
            id: 2,
            image: IPad,
            name: "iPad Pro 32GB",
            price: 800,
            specialOffer: 600,
            currency: "$",
        },
        {
            id: 3,
            image: MackBook,
            name: "MackBook Pro",
            price: 8000,
            specialOffer: 0,
            currency: "PLN",
        }
    ]
}


