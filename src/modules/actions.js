/* eslint-disable no-unused-vars */
import {
  movieList, displayLikes, getMovieComments, postComment,
} from './apis.js';

const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'wwWCSD2YuNcNPNHza6Cc';

// Counter
const counter = (arr) => arr.length;
let truncated = [];
// Display movies
const displayMovies = async (shows) => {
  const listOfShows = document.querySelector('.show-list');

  shows = await movieList();
  truncated = shows.slice(0, 6);

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
          <button class="comments-btn" id="${item.id}">Comments</button>
        </article>      
      `;

    listOfShows.innerHTML += show;

    const likeBtn = document.querySelectorAll('.fa-heart');

    for (let i = 0; i < likeBtn.length; i += 1) {
      likeBtn[i].addEventListener('click', async (e) => {
        const likesCount = document.querySelectorAll('.likes-count');

        const likes = parseInt(likesCount[i].textContent, 10) + 1;
        likesCount[i].textContent = likes;

        await fetch(`${likesURL}${appID}/likes/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item_id: e.currentTarget.dataset.id }),
        });
      });
    }
    displayDetails();
  });
  const pageItems = document.querySelector('.home-count');
  pageItems.textContent = `${counter(truncated)}`;
};

const displayDetails = () => {
  const commentButtons = document.querySelectorAll('.comments-btn');
  commentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // console.log(button.id);
      const movie = truncated[button.id - 1];
      const popupDetail = `<article class="show-card" id="popup">
          <div class="img-box">
            <img class="img" src="${movie.image.medium}">
          </div>
          <div class="show-detail">
            <div class="show-detail-top">
              <h2 class="show-name">${movie.name}</h2>                
              <i data-id="${movie.id}" class="fas fa-heart"></i>                
            </div>
            <div class="show-detail-bottom">
                <div class="rate"> 
                  <p><i class="fas fa-star"></i><span class="rating">${movie.rating.average}</span></p>
                </div>
            </div>         
          </div>
          <form class="form">
            <h2 class="form-caption">Add a comment</h2> 
            <input type="text" name="add-name" id="add-name" placeholder="Your name" required> 
            <input type="text" name="add-insight" id="add-comment" placeholder="Your insights" required>
            <div class="btn-container"> 
              <button class="btn add-btn" type="submit">Comment</button> 
            </div>
          </form> 
        </article>
      `;
      document.body.insertAdjacentHTML('afterbegin', popupDetail);
      const commentList = document.createElement('ul');

      getMovieComments(button.id).then((response) => {
        // console.log(response);
        response.forEach((comment) => {
          commentList.innerHTML += `
              <li>${comment.comment}</li>
            `;
        });
      },
      (error) => {
        commentList.innerHTML += `
              <li>Be the first to comment</li>
            `;
      });
      // const popupElement = document.getElementById('popup');
      // popupElement.appendChild(commentList);
      const commentForm = document.querySelector('.form');
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = document.getElementById('add-name').value;
        const userComment = document.getElementById('add-comment').value;
        postComment(movie.id, userName, userComment);
        commentForm.reset();
      });
    });
  });
};

export { displayMovies, displayDetails };