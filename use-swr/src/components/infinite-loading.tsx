"use client"

import { APIResponse } from "@/types";
import Table from "./common/table";
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex: number, previousPageData: APIResponse) => {
	if (previousPageData && !previousPageData.products.length) return null;
	return `/api/products?page=${pageIndex + 1}&limit=10`;
}

const InfiniteLoadingPage = () => {
	const { data, isLoading, error, size, setSize } = useSWRInfinite<APIResponse>(getKey, fetcher)

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data.</div>;

	// Ensure data exists before accessing it
	if (!data) return null;

	// Flatten the array of product arrays
	const products = data.flatMap(page => page.products);

	return (
		<div className="flex gap-8 flex-col">
			<h1 className="font-semibold text-center text-2xl">Infinite loading</h1>
			<Table products={products} />

			<div className="flex gap-8 justify-center items-center mt-4">
				<p>{products.length} products listed</p>
				{
					products.length !== data[0].totalProducts ? (

						<button
							className={`px-4 py-2 rounded-lg transition-colors bg-slate-200 hover:bg-slate-300`}
							onClick={() => setSize(size + 1)}>Load More</button>
					) : <p>All products fetched.</p>
				}
			</div>
		</div>
	)
}

export default InfiniteLoadingPage