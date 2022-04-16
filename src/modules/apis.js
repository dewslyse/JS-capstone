// Retrieve information from TVmaze API
const movieURL = 'https://api.tvmaze.com/shows';
const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'wwWCSD2YuNcNPNHza6Cc';

// Get movies from API
const movieList = async () => {
  const response = await fetch(movieURL);
  const data = await response.json();
  return data;
};

// Get Likes from API
const retrieveLikes = async () => {
  const response = await fetch(`${likesURL}${appID}/likes`);
  const likes = await response.json();
  return likes;
};

// Display likes on page
const displayLikes = async (id) => {
  const response = await Promise.resolve(retrieveLikes());
  let count = 0;
  for (let i = 0; i < response.length; i += 1) {
    if (response[i].item_id === `${id}`) {
      count = response[i].likes;
    }
  }
  return count;
};

// Get movie comments
const getMovieComments = async (id) => {
  const response = await fetch(`${likesURL}${appID}/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

// Send Comments
const postComment = async (id, username, comment) => {
  const response = await fetch(`${likesURL}${appID}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id, username, comment }),
  });
  return response;
};

export {
  movieList, retrieveLikes, displayLikes, getMovieComments, postComment,
};