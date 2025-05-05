// Product related type definitions

/**
 * Enum representing product categories
 */
export enum ProductCategory {
  ELECTRONICS = 'electronics',
  CLOTHING = 'clothing',
  FURNITURE = 'furniture',
  FOOD = 'food',
  BOOKS = 'books',
  OTHER = 'other',
}

/**
 * Enum representing product status
 */
export enum ProductStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DRAFT = 'draft',
  ARCHIVED = 'archived',
  OUT_OF_STOCK = 'out_of_stock',
}

/**
 * Interface for product pricing information
 */
export interface ProductPricing {
  basePrice: number;
  currentPrice: number;
  discountPercentage?: number;
  currency: string;
  taxRate?: number;
}

/**
 * Interface for product inventory information
 */
export interface ProductInventory {
  stockLevel: number;
  reorderThreshold: number;
  warehouseLocations: string[];
  availableForOrder: boolean;
  estimatedRestockDate?: Date;
}

/**
 * Interface for basic product information
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  category: ProductCategory;
  status: ProductStatus;
  pricing: ProductPricing;
  inventory: ProductInventory;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface for product analytics
 */
export interface ProductAnalytics {
  productId: string;
  views: number;
  conversions: number;
  revenue: number;
  returnRate: number;
  averageRating: number;
}

/**
 * Interface for API response containing products
 */
export interface ProductsApiResponse {
  products: Product[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
