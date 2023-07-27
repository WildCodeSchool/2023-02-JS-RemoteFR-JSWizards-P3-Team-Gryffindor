// eslint-disable-next-line import/no-cycle
import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export async function LoadUser(id) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // Handle error if needed
      console.error("Error fetching user:", error);
      throw error;
    });
}
