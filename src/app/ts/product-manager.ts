import { Iproduct } from "./iproduct";
import { ProductType } from "./../product-type.enum";
import { Product } from "./product";
export class ProductManager {
    public _products: Array<Product> = [];

    constructor(){
        this.loadProducts();
    }

    getProducts(): Array<Product>{
        return this._products;
    }

    getProductByType(type : ProductType) : Array<Product>{
        return this._products.filter(p=> p.type == type);
    }

    loadProducts(){
        this.appendProduct(new Product(1, ProductType.overalls, "2 Piece Conti Suit", 
        "Jacket features include two side pockets and chest pocket. Pants with ½ elasticated waistband, two side pockets and one back pocket. Reinforced and bar tacked seams.",
        "Royal Blue, Navy, Black, Grey, Red, Yellow, Emerald Green, White, Khaki, Orange", "image"));
        this.appendProduct(new Product(2,ProductType.overalls, "Boiler Suit",
        "Jacket includes a chest pocket. Pants with ½ elasticated Waistband, two side pockets and one back pocket. Reinforced and bar tacked seams.",
        "Royal Blue, Navy, Black, Grey, Red, Yellow, Emerald Green, White, Khaki, Orange", "image"));
    }

    private appendProduct(product : Product){
        this._products.push(product);
    }
}
