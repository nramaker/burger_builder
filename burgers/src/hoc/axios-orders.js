import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-nate.firebaseio.com'
    // headers : {
    //     'Content-Type' : 'application/json',
    //     'Accept' : 'application/json',
    //     'Authorization' : 'Bearer AAAA8EInBNU:APA91bHqJZwTvYy3FPLUVzgUG7qy1L56cctGUoiLl0kWyaZM1ouasvAlmdMI-S8PqjcocOVtZ2ZDt-SWjWTZ7vSRvweZSSwhhMxX2uixhwihUSBsUM2EqDnff42WQ8cjSpNkX92GikrJ'
    // }
});

export default instance;