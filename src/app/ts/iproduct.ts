import { ProductType } from "./../product-type.enum";
export interface Iproduct {
    id: number;
    type: ProductType;
    name: string;
    description: string;
    variants: string;
    image: string;
}
