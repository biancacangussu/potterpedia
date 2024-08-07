import { api } from "../lib/axios";

export const getCharacters = async (pageNumber = 1, pageSize = 48, search = '') => {
  const response = await api.get(`/characters?page[number]=${pageNumber}&page[size]=${pageSize}&filter[name_cont]=${search}`);
  return {
    data: response.data.data,
    meta: response.data.meta
  };
};

export const getPotions = async (pageNumber = 1, pageSize = 48, search = '') => {
  const response = await api.get(`/potions?page[number]=${pageNumber}&page[size]=${pageSize}&filter[name_cont]=${search}`);
  return {
    data: response.data.data,
    meta: response.data.meta
  };
};

export const getSpells = async (pageNumber = 1, pageSize = 48, search = '') => {
  const response = await api.get(`/spells?page[number]=${pageNumber}&page[size]=${pageSize}&filter[name_cont]=${search}`);
  return {
    data: response.data.data,
    meta: response.data.meta
  };
};
