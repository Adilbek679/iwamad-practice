import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button
      id="like-btn"
      className={`px-4 py-2 rounded-md ml-auto ${likes > 0 ? 'is-liked' : ''}`}
      type="button"
      onClick={addLike}
    >
      {likes === 0 ? '♡ Like' : `♥ ${likes}`}
    </button>
  )
}

export default LikeButton
