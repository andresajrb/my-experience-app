type SkillsProps = {
    title: string;
    labels: string[];
  };
  
const SkillCard = ({ title, labels }: SkillsProps) => {
    return (
        <div className="bg-[#bbc8ec] dark:bg-[#202636] rounded-xl p-6 min-w-[220px] text-start">
        <h3 className=" text-cyan-900 dark:text-cyan-400 font-bold text-xl mb-5">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {labels.map((label) => (
            <span
                key={label}
                className="bg-[#798aba] dark:bg-[#323849] text-gray-900 dark:text-gray-300 rounded-md px-4 py-2 text-sm font-medium shadow-sm"
            >
                {label}
            </span>
            ))}
        </div>
        </div>
    );
};

const SKILLS = [
    {
        title: "Frontend",
        labels: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
    },
    {
        title: "Backend",
        labels: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"]
    },
    {
        title: "DevOps",
        labels: ["Docker", "Git", "CI/CD", "AWS S3", "AWS Lambda", "Google BigQuery"]
    },
    {
        title: "Diseño & Tools",
        labels: ["Figma", "Adobe XD", "Adobe Photoshop", "Miro"]
    }
]
  
const Skills = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
            ))}
        </div>
    );
};

export default Skills;