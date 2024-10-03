import { Product } from "@/types";

interface TableProps {
	products: Product[],
	showUpdateButton?: boolean,
	handleUpdate?: (product: Product) => Promise<void>
}

const Table = ({ products, showUpdateButton = false, handleUpdate }: TableProps) => {

	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full border-collapse font-sans">
				<thead>
					<tr className="bg-gray-100">
						<th className="border border-gray-300 p-2 text-left font-bold">ID</th>
						<th className="border border-gray-300 p-2 text-left font-bold">Name</th>
						<th className="border border-gray-300 p-2 text-left font-bold">Price</th>
						<th className="border border-gray-300 p-2 text-left font-bold">Category</th>
						{showUpdateButton && (
							<th className="border border-gray-300 p-2 text-left font-bold">Action</th>
						)}
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id} className="hover:bg-gray-50">
							<td className="border border-gray-300 p-2">{product.id}</td>
							<td className="border border-gray-300 p-2">{product.name}</td>
							<td className="border border-gray-300 p-2">${product.price.toFixed(2)}</td>
							<td className="border border-gray-300 p-2">{product.category}</td>
							{showUpdateButton && handleUpdate && (
								<td className="border border-gray-300 p-2">
									<button
										onClick={() => handleUpdate(product)}
										className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors duration-200"
									>
										Update
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table;