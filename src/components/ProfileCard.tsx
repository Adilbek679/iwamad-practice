import SkillBadge, { type Skill } from './SkillBadge'
import LikeButton from './LikeButton'
import Card from './ui/Card'

type ProfileCardProps = {
  name: string
  role: string
  avatarUrl?: string
  bio: string
  email: string
  githubUrl: string
  skills: Skill[]
}

function ProfileCard({
  name,
  role,
  avatarUrl,
  bio,
  email,
  githubUrl,
  skills,
}: ProfileCardProps) {
  return (
    <Card id="profile-card">
      <div className="identity-row">
        <img
          className="avatar"
          src={avatarUrl}
          alt={`${name}'s avatar`}
          width={84}
          height={84}
        />

        <div>
          <h1 className="display text-2xl">{name}</h1>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>

      <p className="bio">{bio}</p>

      <div className="skills-grid">
        {skills.length === 0 ? (
          <p className="text-sm text-muted">No skills added yet.</p>
        ) : (
          skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))
        )}
      </div>

      <div className="link-row">
        <a href={`mailto:${email}`}>Email</a>

        <a href={githubUrl} target="_blank" rel="noopener">
          GitHub
        </a>

        <LikeButton />
      </div>
    </Card>
  )
}

export default ProfileCard
