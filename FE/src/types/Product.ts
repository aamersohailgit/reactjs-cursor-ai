export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'kids' | 'accessories';
  images: string[];
  sizes: string[];
  colors: string[];
  stock: number;
  rating: number;
  featured: boolean;
  createdAt: string;
}

export interface ProductsResponse {
  success: boolean;
  count: number;
  total: number;
  totalPages: number;
  currentPage: number;
  products: Product[];
}