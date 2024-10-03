"use client"

import { useState } from "react";
import BasicUsage from "@/components/basic-use";
import InfiniteLoadingPage from "@/components/infinite-loading";
import MutateData from "@/components/mutate-data";
import Pagination from "@/components/pagination";

type components = "basicUsage" | "pagination" | "infiniteLoading" | "mutateData"

export default function Home() {
	const [activeComponent, setActiveComponent] = useState<components>("basicUsage");

	const renderComponent = () => {
		switch (activeComponent) {
			case "basicUsage":
				return <BasicUsage />;
			case "pagination":
				return <Pagination />;
			case "infiniteLoading":
				return <InfiniteLoadingPage />;
			case "mutateData":
				return <MutateData />;
			default:
				return <p className="text-gray-500">Please select a component to view.</p>;
		}
	};

	return (
		<div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
			<h1 className="text-2xl font-semibold mb-6">Component Viewer</h1>

			<div className="flex gap-4 mb-8">
				<button
					onClick={() => setActiveComponent("basicUsage")}
					className={`px-4 py-2 rounded-lg transition-colors ${activeComponent === "basicUsage"
						? "bg-blue-600 text-white"
						: "bg-blue-100 text-blue-600 hover:bg-blue-200"
						}`}
				>
					Basic Usage
				</button>
				<button
					onClick={() => setActiveComponent("pagination")}
					className={`px-4 py-2 rounded-lg transition-colors ${activeComponent === "pagination"
						? "bg-green-600 text-white"
						: "bg-green-100 text-green-600 hover:bg-green-200"
						}`}
				>
					Pagination
				</button>
				<button
					onClick={() => setActiveComponent("infiniteLoading")}
					className={`px-4 py-2 rounded-lg transition-colors ${activeComponent === "infiniteLoading"
						? "bg-purple-600 text-white"
						: "bg-purple-100 text-purple-600 hover:bg-purple-200"
						}`}
				>
					Infinite Loading
				</button>
				<button
					onClick={() => setActiveComponent("mutateData")}
					className={`px-4 py-2 rounded-lg transition-colors ${activeComponent === "mutateData"
						? "bg-red-600 text-white"
						: "bg-red-100 text-red-600 hover:bg-red-200"
						}`}
				>
					Mutate Data
				</button>
			</div>

			<div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
				{renderComponent()}
			</div>
		</div>
	);
}
