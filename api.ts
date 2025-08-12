import { Character, PaginatedResponse } from "./types";

const API_BASE_URL = "https://rickandmortyapi.com";

const fetchCharacters = async (
  signal: AbortSignal,
  page: number = 1,
  params?: Record<string, string>
): Promise<PaginatedResponse<Character>> => {
  const searchParams = new URLSearchParams();
  if (params && Object.keys(params).length) {
    Object.keys(params).map((key) => {
      if (params[key]) {
        searchParams.append(key, params[key]);
      }
    });
  }
  let url = `${API_BASE_URL}/api/character?page=${page}`;
  if (searchParams.toString()) url += `&${searchParams.toString()}`;
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return await response.json();
};

const getCharacterDetailsById = async (
  id: number,
  signal: AbortSignal
): Promise<Character> => {
  const url = `${API_BASE_URL}/api/character/${id}`;
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch character details");
  }
  return await response.json();
};

export { fetchCharacters, getCharacterDetailsById };
