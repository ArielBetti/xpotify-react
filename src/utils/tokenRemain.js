import { getHashParams } from "./getHashParams";

export const tokenRemain = () => {
  let params = getHashParams();

  let access_token = params.token,
    refresh_token = params.refresh_token,
    error = params.error;
  if (error) console.log(error);

  localStorage.access_token = access_token;
  localStorage.refresh_token = refresh_token;
};
