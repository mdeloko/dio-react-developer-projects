import axios from 'axios';

const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/"

});

export default githubApi;