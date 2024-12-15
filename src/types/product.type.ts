export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: { id: string; name: string };
  vendor: { id: string; name: string };
  rating: number;
  inventory: number;
  images: string[];
  discount: number;
  description?: string;
  review?: {
    id: string;
    name: string;
    rating: number;
    comment: string;
  }[];
}
