export interface PaginatedResponseMeta {
	current_page: number;
	per_page: number;
	total_items: number;
	total_pages: number;
	has_more_pages: boolean;
	last_page: number;
}

export interface PaginatedResponse<T> {
	identical_code: string;
	message: string;
	content: {
		data: Array<T>;
		meta: PaginatedResponseMeta;
	};
	errors: Array<string>;
}
