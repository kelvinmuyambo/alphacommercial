import { ProductType } from "./../product-type.enum";
export class Product {
    id: number;
    type: ProductType;
    name: string;
    description: string;
    variants: string;
    image: string;
    constructor(id: number, type : ProductType, name :string, description : string, 
        variants : string, image : string){
        this.id = id;
        this.type = type;
        this.description = description;
        this.variants = variants;
        this.image = image;
        this.name = name;
    }
}
