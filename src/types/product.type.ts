export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: { name: string };
  vendor: { name: string };
  rating: number;
  inventory: number;
  images: string[];
  discount: number;
}
