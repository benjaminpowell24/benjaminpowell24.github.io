import { useDroppable } from '@dnd-kit/core'
import ProjectCard from './ProjectCard'

const Droppable = ({ id, project, isDarkMode }) => {
  const { setNodeRef } = useDroppable({ id: id })

  return (
    <div ref={setNodeRef}>
      <ProjectCard key={project.id} {...project} isDarkMode={isDarkMode} />
    </div>
  )
}
export default Droppable
