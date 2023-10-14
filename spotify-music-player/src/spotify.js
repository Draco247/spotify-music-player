import axios from "axios";

const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${process.env.REACT_APP_auth_endpoint}client_id=${process.env.REACT_APP_client_ID}&redirect_uri=${process.env.REACT_APP_redirect_URI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
baseURL: "https://api.spotify.com/v1/",
});

export const refresh = axios.post()

export const setClientToken = (token) => {
apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
});
};