import { getHashParams } from "./getHashParams";

export const tokenRemain = () => {
  let params = getHashParams();

  let access_token = params.token,
    refresh_token = params.refresh_token,
    error = params.error;

  localStorage.access_token = access_token;
  localStorage.refresh_token = refresh_token;
};
