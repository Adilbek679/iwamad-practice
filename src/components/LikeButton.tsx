import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

function LikeButton() {
  const { likes, addLike } = useLikes()
  const label = likes === 0 ? 'Like' : `Like (${likes} ${likes === 1 ? 'like' : 'likes'})`

  return (
    <Button
      id="like-btn"
      variant={likes > 0 ? 'primary' : 'secondary'}
      className="ml-auto"
      aria-label={label}
      onClick={addLike}
    >
      {likes === 0 ? '♡ Like' : `♥ ${likes}`}
    </Button>
  )
}

export default LikeButton
