import {CategoryProductInterface} from "./category-product.interface";

export interface ProductsInterface {
  id: number,
  title: string,
  buttons: Array<CategoryProductInterface>
}
