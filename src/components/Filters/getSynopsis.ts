import authConfig from "../../auth_config.json";
import { Synopsis } from "./types/Synopsis";

export const getSynopsis = async (accessToken: string): Promise<Synopsis> => {
  const url = `${authConfig.apiBase}/synopsis`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = `An error has occured: ${response.status}`;
    return Promise.reject(error);
  }

  const { data } = await response.json();

  return Promise.resolve(data);
};
