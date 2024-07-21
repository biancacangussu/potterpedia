import { api } from "../lib/axios";

export const getCharacters = async () => {
  const response = await api.get('/characters?page[number]=1&page[size]=48');
  return response.data.data;
};

export const getPotions = async () => {
  const response = await api.get('/potions');
  return response.data.data;
};

export const getSpells = async () => {
  const response = await api.get('/spells');
  return response.data.data;
};
