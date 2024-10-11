import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const MAIN_API = axios.create({
	baseURL: BASE_URL,
});

MAIN_API.interceptors.request.use((config) => {
	const token: string =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTUuMjM1LjE5OS44MDo4MjgwL2FwaS92MS90ZW5hbnQvYXV0aC9sb2dpbiIsImlhdCI6MTcyODY2MDIzOSwiZXhwIjoxNzMxMjUyMjM5LCJuYmYiOjE3Mjg2NjAyMzksImp0aSI6IlhrdnRnN0diTlFvWTBYckIiLCJzdWIiOiI5ZDMzYjdmZC03NGQ3LTRlZWItYTI3MS02NmQ4MzcyN2ZkMzkiLCJwcnYiOiI0MzI2MzM3NWY3ZmZkNmEyY2U1ZjM4YmU5MzhmZDEyZTNmMDc5ZmFlIn0.DzwbSKWfFTOSZhU5B8A9FG7c-AIr4XCyR6NJOGw9XFA";
	config.headers.Authorization = `Bearer ${token}`;

	return config;
});
