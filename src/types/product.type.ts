export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: { name: string };
  inventory: number;
  images: string[];
  discount: number;
}
