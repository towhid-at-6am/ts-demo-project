import { ICategoryRequest, ICategoryResponse } from "@/models/category.model";
import { PaginatedResponse } from "@/models/common.model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { MAIN_API } from "./api";

class CategoryService {
	getCategories(pageParams: any) {
		return useQuery({
			queryKey: ["categories", JSON.stringify(pageParams)],
			queryFn: (): Promise<
				AxiosResponse<PaginatedResponse<ICategoryResponse>>
			> => {
				return MAIN_API.get("/menu/api/v1/category", {
					params: pageParams,
				});
			},
			refetchOnMount: true,
		});
	}

	storeCategory(data: ICategoryRequest) {
		return useMutation({
			mutationKey: ["storeCategory"],
			mutationFn: (): Promise<AxiosResponse<ICategoryResponse>> => {
				return MAIN_API.post("/menu/api/v1/category", {
					data,
				});
			},
			onSuccess: () => {
				console.log("Successfully Created");
			},
			onError: () => {
				console.log("Something went wrong");
			},
		});
	}
}

const categoryService = new CategoryService();

export default categoryService;
