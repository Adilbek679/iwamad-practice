export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="skill">{skill.label}</span>
  );
}

export default SkillBadge;