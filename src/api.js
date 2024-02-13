import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "gOTmj8JmQWGgiHpU4pzX2JYCN-uvE_TdR5QD1-gJgZM";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: { query, client_id: API_KEY, page, per_page: 12 },
  });
  console.log(response.data);
  return response.data;
};