export interface Category {
  name: string;
  count: number;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

export interface ProductConfig {
  type: 'tshirt' | 'hoodie' | 'sweater' | 'tanktop' | 'longsleeve';
  color: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  customText?: string;
  designUrl?: string;
}