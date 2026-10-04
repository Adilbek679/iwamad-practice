import ProfileCard from '../components/ProfileCard'
import { skills } from '../data/skills'

function HomePage() {
  return (
    <ProfileCard
      name="Adilbek"
      role="Aspiring Web Developer"
      avatarUrl="https://picsum.photos/168/168"
      bio="Aspiring web developer interested in Python, Django, cloud computing, and modern web technologies."
      email="idealpirnazarov@gmail.com"
      githubUrl="https://github.com/Adilbek679"
      skills={skills}
    />
  )
}

export default HomePage
