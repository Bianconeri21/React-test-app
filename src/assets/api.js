import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://cloud.codesupply.co/endpoint/react/data.json"
  );
  return response.data;
};
