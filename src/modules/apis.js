// Retrieve information from TVmaze API
const baseURL = 'https://api.tvmaze.com/shows';

const movieList = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export { movieList };