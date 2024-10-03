import { products } from "@/data/data";
import { NextResponse } from "next/server"

export async function PUT(
	request: Request,
	{ params }: { params: { pid: string } }
) {
	const productId = Number(params.pid)
	const { price } = await request.json();

	if (typeof price !== 'number') {
		return NextResponse.json({ error: "Invalid price" }, { status: 400 });
	}

	const productIndex = products.findIndex(p => p.id === productId);

	if (productIndex === -1) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}

	products[productIndex] = {
		...products[productIndex],
		price: Number(price.toFixed(2))
	};


	return NextResponse.json(products[productIndex]);
}