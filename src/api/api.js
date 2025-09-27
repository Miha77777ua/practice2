import axios from "axios";

axios.defaults.baseURL = "https://tenor.googleapis.com/v2"

const getGifs = async keyword => {
  const response = await axios.get(`/search?q=${keyword}&key=${import.meta.env.VITE_API_KEY}&limit=15`);
  return response.data.results;
}

export default {
  getGifs,
};
