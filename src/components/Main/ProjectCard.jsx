import { RepoIcon, GrabberIcon } from '@primer/octicons-react'
import { useDraggable } from '@dnd-kit/core'

const ProjectCard = ({ id, title, description, github, tags, isDarkMode }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })

  const bgColor = isDarkMode ? '#0d1118' : '#F5F7FA'
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={
        transform
          ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
              backgroundColor: `${bgColor}`,
            }
          : undefined
      }
      className="border border-[#0000001A] dark:border-[#3c454d] rounded p-4 hover:cursor-grab hover:shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <RepoIcon />
          <a
            href={github}
            className="mx-2 font-semibold dark:text-sky-500"
            target="_blank"
          >
            {title}
          </a>
        </div>
        <div>
          <GrabberIcon />
        </div>
      </div>

      <p className="text-[#4A5568] dark:text-white">{description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#0000001A] dark:bg-sky-500 px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
export default ProjectCard
