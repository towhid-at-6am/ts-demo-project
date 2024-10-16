import { HttpMethods } from "@/enums/http-methods.enums";

export interface ISubCategoryResponse {
	id: string;
	category_id: string;
	name: string;
	short_description: string;
	image_path?: string;
	is_active: boolean;
	position: number;
	created_at?: Date;
}

export interface ICategoryResponse {
	id: string;
	name: string;
	short_description: string;
	image_path?: string;
	is_active: boolean;
	position: number;
	subcategories?: Array<ISubCategoryResponse>;
	restaurant_id: string;
	created_at?: Date;
}

export interface ICategoryRequest {
	_method?: HttpMethods;
	name: string;
	short_description?: string;
	image?: File | null;
	is_active: boolean;
	menu_ids: Array<string>;
}
