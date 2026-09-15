const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('#profile-card');

likeBtn.addEventListener('click', () => {
  const liked = likeBtn.classList.toggle('is-liked');
  card.classList.toggle('is-liked', liked);
  likeBtn.textContent = liked ? '♥ Liked' : '♡ Like';
  likeBtn.setAttribute('aria-pressed', String(liked));
});