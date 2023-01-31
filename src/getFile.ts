import axios from 'axios';
 

export const getFile = function (filePath: string) {
  
    return axios.get(filePath, {
        headers: {
            caches: 'no-cache',
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}