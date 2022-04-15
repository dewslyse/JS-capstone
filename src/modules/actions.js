import { movieList, displayLikes } from './apis.js';

const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'wwWCSD2YuNcNPNHza6Cc';

// Counter
const counter = (arr) => arr.length;

// Display movies
const displayMovies = async (shows) => {
  const listOfShows = document.querySelector('.show-list');

  shows = await movieList();
  const truncated = shows.slice(0, 6);

  truncated.forEach(async (item) => {
    const show = `
        <article class="show-card">
          <div class="img-box">
            <img class="img" src="${item.image.medium}">
          </div>
          <div class="show-detail">
            <div class="show-detail-top">
              <h2 class="show-name">${item.name}</h2>                
              <i data-id="${item.id}" class="fas fa-heart"></i>                
            </div>
            <div class="show-detail-bottom">
                <div class="rate"> 
                  <p><i class="fas fa-star"></i><span class="rating">${item.rating.average}</span></p>
                </div>
                <p>
                  <span class="likes-count">${await Promise.resolve(displayLikes(item.id))}</span>
                  <span class="likes">Likes</span>
                </p>
            </div>          
          </div>
          <button class="comments-btn">Comments</button>
        </article>      
      `;

    listOfShows.innerHTML += show;

    const likeBtn = document.querySelectorAll('.fa-heart');
    likeBtn.forEach((item) => {
      item.addEventListener('click', async (e) => {
        await fetch(`${likesURL}${appID}/likes/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item_id: e.currentTarget.dataset.id }),
        });
      });
    });
  });
  const pageItems = document.querySelector('.home-count');
  pageItems.textContent = `${counter(truncated)}`;
};

export default displayMovies;