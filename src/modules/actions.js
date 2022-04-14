import { movieList } from './apis.js';

// Counter
const counter = (shows) => shows.length;

// Display movies
const displayMovies = async (shows) => {
  const listOfShows = document.querySelector('.show-list');

  shows = await movieList();
  const truncated = shows.slice(0, 12);

  truncated.forEach((item) => {
    const show = `
        <article class="show-card">
          <div class="img-box">
            <img class="img" src="${item.image.medium}">
          </div>
          <div class="show-detail">
            <div class="show-detail-top">
                <h2 class="show-name">${item.name}</h2>                
                <i class="fas fa-heart"></i>                
            </div>
            <div class="show-detail-bottom">
                <div class="rate"> 
                    <p><i class="fas fa-star"></i><span class="rating">${item.rating.average}</span></p>
                </div>
                <p>10<span class="likes">Likes</span></p>
            </div>          
          </div>
          <button class="comments-btn">Comments</button>
        </article>      
        `;

    listOfShows.innerHTML += show;
  });
  const pageItems = document.querySelector('.home-count');
  pageItems.textContent = `${counter(truncated)}`;
};

export { displayMovies };