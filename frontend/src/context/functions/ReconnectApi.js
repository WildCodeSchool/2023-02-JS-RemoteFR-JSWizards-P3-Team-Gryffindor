// eslint-disable-next-line import/no-cycle
import Api from "../../services/Api";

// eslint-disable-next-line import/prefer-default-export
export async function LoadUser(id) {
  return Api.apigetmysql(
    `${import.meta.env.VITE_BACKEND_URL}/users/${id}`
  ).then((res) => {
    return res;
  });
}
