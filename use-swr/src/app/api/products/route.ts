import { NextResponse, type NextRequest } from 'next/server'
import { products } from "@/data/data";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const page = searchParams.get('page') || 1;
	const limit = searchParams.get('limit') || 10;

	const startIndex = (Number(page) - 1) * Number(limit);
	const endIndex = startIndex + Number(limit);

	const result = products.slice(startIndex, endIndex);
	return NextResponse.json({
		products: result,
		currentPage: Number(page),
		totalPages: Math.ceil(products.length / Number(limit)),
		totalProducts: products.length
	});
}
