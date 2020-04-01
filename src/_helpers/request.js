import axios from 'axios';
import { BASE_URL } from './apis';
import { notification } from 'antd'


const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
    }
    return request
}


const instance = axios.create({
    baseURL: BASE_URL,
});
//Enable Request interceptor
instance.interceptors.request.use(
    request => requestHandler(request)
)
instance.interceptors.response.use((response) => response, (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        console.log("Logging the error", error);


        notification['error']({
            message: 'System Error',
            description:
                'An unexpected error occurred.',
        });
    } else {

        const { response } = error;
        const { request, ...errorObject } = response;

        notification['warn']({
            message: 'Server Message',
            description:
                `${errorObject.data.message}`,
        });
    }

    return Promise.reject(error);
});

export default instance;

