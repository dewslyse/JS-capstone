/* * @jest-environment jsdom */
import { counter, commentsCounter } from './modules/actions.js';

describe('Count items on Homepage', () => {
  test('Number of items', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(counter(arr)).toBe(5);
  });
});

let comments;
const testDiv = `
  <ul class="comment-box">
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>
`;

describe('Count number of comments', () => {
  beforeAll(() => {
    document.body.innerHTML = testDiv;
    comments = document.querySelectorAll('.comment-box li');
  });
  test('Number of comments', () => {
    expect(commentsCounter(comments)).toHaveALength(3);
  });
});