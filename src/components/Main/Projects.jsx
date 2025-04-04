import { useState } from 'react'
import { projects as projectList } from './lists'
import { DndContext } from '@dnd-kit/core'
import Droppable from './Droppable'

const Projects = ({ isDarkMode }) => {
  const [projects, setProjects] = useState(projectList)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (!over) return

    const projectId = active.id
    const droppableId = over.id

    setProjects((prev) => {
      const draggableCardIndex = prev.findIndex(
        (project) => project.id === projectId
      )
      const draggableCard = prev.find((project) => project.id === projectId)

      const updatedProjects = [...prev]

      if (draggableCard) {
        updatedProjects.splice(draggableCardIndex, 1)
        updatedProjects.splice(droppableId, 0, draggableCard)
      }
      return updatedProjects
    })
  }

  return (
    <section id="projects" className="my-10">
      <h1 className="text-2xl font-bold my-5">Projects</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid lg:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <Droppable
              key={index}
              id={index}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </DndContext>
    </section>
  )
}

export default Projects
