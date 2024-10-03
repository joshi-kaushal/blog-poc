"use client"

import useSWR from "swr"
import Table from "./common/table";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Pagination = () => {
	const [pageIndex, setPageIndex] = useState(1);
	const { data, error, isLoading } = useSWR(`/api/products?page=${pageIndex}`, fetcher);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data.</div>;

	return (
		<div className="flex gap-8 flex-col">
			<h1 className="font-semibold text-center text-2xl">Pagination Data</h1>

			<Table products={data.products} />
			<div className="flex gap-8 justify-center">
				<button className="border rounded-lg px-1.5 py-1" onClick={() => setPageIndex((prev: number) => prev - 1)} disabled={pageIndex === 1}>
					Previous
				</button>
				<button className="border rounded-lg px-1.5 py-1" onClick={() => setPageIndex((prev: number) => prev + 1)} disabled={pageIndex === data.totalPages}>
					Next
				</button>
			</div>
		</div>
	);
}

export default Pagination;