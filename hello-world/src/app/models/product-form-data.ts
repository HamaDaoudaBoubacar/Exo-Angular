import { Product } from "./product";

export interface ProductFormData {
    toUpdate: boolean;
    product: Product;
}