import axios from "axios";

const REACT_APP_RAPID_API_KEY = 'a1d802f5demshf21186a985b4d35p1abd9ajsnba5213f28547'

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  // url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};