import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from '../services/auth-service';

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: "Bearer " + authService.getAccessToken()
        }
        : config.headers;

    return axios( {...config, baseURL: BASE_URL, headers} );
}

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            console.log("DEU 401!");
        }
        if (error.response.status === 403) {
            console.log("DEU 403!");
        }
        return Promise.reject(error);
    }
);