import axios from 'axios';

export const getFile = function (filePath: string) {
    return axios.get(filePath)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}