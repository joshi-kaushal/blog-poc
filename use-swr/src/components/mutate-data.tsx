"use client"

import useSWR, { mutate } from "swr"
import Table from "./common/table";
import { Product } from "@/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MutateData = () => {
	const { data, error, isLoading } = useSWR('/api/products', fetcher);

	const updateProduct = async (product: Product) => {
		mutate(`/api/products/${product.id}`, { ...product, price: product.price + 10 }, false);

		const res = await fetch(`/api/products/${product.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ price: product.price + 10 }),
		});
		const data = await res.json();
		alert(`Updated data: \n ${JSON.stringify(data)}`)

		// Revalidate the data after mutation
		mutate(`/api/products/${product.id}`);
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col items-center justify-center gap-8">
			<div className="space-y-1">
				<h1 className="font-semibold text-center text-2xl">Data mutation</h1>
				<p>As we are using mock data, the data inside the table would remain the same.</p>
			</div>

			<Table products={data.products} showUpdateButton={true} handleUpdate={updateProduct} />
		</div>
	);
}

export default MutateData;