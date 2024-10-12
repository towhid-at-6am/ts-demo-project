import { MAIN_API } from "@/services/api";

const getCategories = async () => {
	const response = await MAIN_API.get("/menu/api/v1/category");
	return response.data.content;
};
