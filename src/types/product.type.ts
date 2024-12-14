export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: { name: string };
  inventory: number;
  image: string;
  discount: number;
}
