

// Base URLs
const AUTH_BASE_URL = "http://localhost:8080/api/auth";
const USER_BASE_URL = "http://localhost:8080/api/users";

// Auth endpoints
export const API_URL_REGISTER = `${AUTH_BASE_URL}/register`;
export const API_URL_LOGIN = `${AUTH_BASE_URL}/login`;
export const API_URL_LOGOUT = `${AUTH_BASE_URL}/logout`;
export const API_URL_GOOGLE_LOGIN = `${AUTH_BASE_URL}/google`;

// User endpoints
export const API_URL_UPDATE_PROFILE = USER_BASE_URL; 
export const API_URL_GET_USER = USER_BASE_URL;
export const API_URL_DELETE_USER = USER_BASE_URL;