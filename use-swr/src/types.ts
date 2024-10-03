export interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
}

export interface APIResponse {
	products: Product[],
	currentPage: number;
	totalPages: number;
	totalProducts: number;
}