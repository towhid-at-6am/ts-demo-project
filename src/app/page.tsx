"use client";
import { ICategoryResponse } from "@/models/category.model";
import categoryService from "@/services/category.service";

export default function Home() {
	const { data } = categoryService.getCategories({ limit: 5 });

	const categoryList: ICategoryResponse[] = data?.data.content.data || [];
	const meta = data?.data.content.meta;

	return (
		<div className="flex flex-col gap-5 items-center mt-5">
			{categoryList.map((category) => (
				<p key={category.id}>{category.name}</p>
			))}

			<p className="flex items-center justify-center gap-4">
				<span>
					page: {meta?.current_page} / {meta?.last_page}
				</span>
				<span>total: {meta?.total_items}</span>
				<span>per_page: {meta?.per_page}</span>
			</p>
		</div>
	);
}
