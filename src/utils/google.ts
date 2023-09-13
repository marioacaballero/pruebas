import { google } from "googleapis";

export const apis = () => {
  const api = google.getSupportedAPIs();
  return JSON.stringify(api);
};
