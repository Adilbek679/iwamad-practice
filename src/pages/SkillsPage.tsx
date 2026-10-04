import SkillBadge from '../components/SkillBadge'
import { skills } from '../data/skills'

function SkillsPage() {
  return (
    <section className="card">
      <h1 className="display">My skills</h1>

      <div className="skills-grid">
        {skills.map(skill => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default SkillsPage
