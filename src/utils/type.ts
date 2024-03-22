export interface CategoryProduct {
    id: number
    categoryName: string
    products: Product[]
  }
  
  export interface Product {
    id: number
    productName: string
    img: string
    price: number
    stock: number
    sold: number
  }