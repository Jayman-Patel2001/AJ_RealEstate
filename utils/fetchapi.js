import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "28c5cf6ad9msh76c01752fcab230p1fe5a0jsn1762530c2aa6",
    },
  });
  return data;
};
