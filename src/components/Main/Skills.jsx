const Skills = () => {
  const tags = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'Next.js',
    'Tailwind CSS',
    'GraphQL',
    'REST API',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'AWS',
    'Kubernetes',
    'DevOps',
    'Microservices',
    'Agile',
    'Scrum',
    'TDD',
    'Cloud Computing',
    'CI/CD',
  ]
  return (
    <section id="skills" className="my-10">
      <h1 className="text-2xl font-bold my-5">Skills 👨‍💻</h1>
      
      {/* <p className="my-2">
       Software Skills:
      </p> */}

      <div className="flex flex-wrap gap-2 my-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#0000001A] dark:bg-sky-500 px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
