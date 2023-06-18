import {API_BASE_URL} from '@env';
console.log(API_BASE_URL, 'api url ===>>>>');
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const STACK_QUESTIONS_END_POINT = getApiUrl('questions');
