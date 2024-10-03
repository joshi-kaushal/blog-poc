"use client"

import useSWR from "swr"
import Table from "./common/table";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BasicUsage = () => {
	const { data, error, isLoading } = useSWR('/api/products', fetcher);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col items-center justify-center gap-8">
			<h1 className="font-semibold text-center text-2xl">Fetched Data</h1>

			<Table products={data.products} />
		</div>
	);
}

export default BasicUsage;