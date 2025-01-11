import axios from "axios";

const BASE_URL = "http://localhost:8080/news/";

export const getAllNews = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Throw the error for handling
  }
};
