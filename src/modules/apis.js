//Retrieve information from TVmaze API
const baseURL = 'https://api.tvmaze.com/shows';

export const movieList = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
};