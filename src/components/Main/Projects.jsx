import { RepoIcon, GrabberIcon } from '@primer/octicons-react'

const Projects = () => {
  const smartAssistantTags = [
    'Typescript',
    'ReactJS',
    'Framer',
    'Express',
    'OpenAI API',
  ]

  const obstacleDetectorTags = [
    'Flutter',
    'YoloV4',
    'tensorflow lite',
    'Google ML Kit',
  ]

  const ecommerceTags = ['ReactJS', 'Firebase', 'Stripe']

  const loadBalancerTags = ['Nginx', 'Express', 'Docker']

  return (
    <section id='projects' className='my-10'>
      <h1 className='text-2xl font-bold my-5'>Projects</h1>
      <div className='grid lg:grid-cols-2 gap-3'>
        <div className='border border-[#3c454d] rounded p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <RepoIcon />
              <a
                href='https://github.com/benjaminpowell24/smart-assistant'
                className='mx-2 font-semibold text-sky-600'
                target='_blank'
              >
                Smart Assistant
              </a>
            </div>
            <div>
              <GrabberIcon />
            </div>
          </div>

          <p>
            OpenAI powered conversational agent that operates as a helpful
            assistant
          </p>
          <div className='flex flex-wrap gap-2 my-2'>
            {smartAssistantTags.map((tag) => (
              <span className='rounded-full bg-sky-500 px-2 py-1 text-xs'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='border border-[#3c454d] rounded p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <RepoIcon />
              <a
                href='https://github.com/benjaminpowell24/Obstacle-classifier-detector'
                className='mx-2 font-semibold text-sky-600'
                target='_blank'
              >
                Obstacle Detector and classifier
              </a>
            </div>
            <div>
              <GrabberIcon />
            </div>
          </div>

          <p>
            Mobile app designed for obstacle detection and classification,
            developed as part of research on smart walking aids for the visually
            impaired.
          </p>
          <div className='flex flex-wrap gap-2 my-2'>
            {obstacleDetectorTags.map((tag) => (
              <span className='rounded-full bg-sky-500 px-2 py-1 text-xs'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='border border-[#3c454d] rounded p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <RepoIcon />
              <a
                href='https://github.com/benjaminpowell24/Amazon-clone'
                className='mx-2 font-semibold text-sky-600'
                target='_blank'
              >
                E-commerce Web App
              </a>
            </div>
            <div>
              <GrabberIcon />
            </div>
          </div>
          <p>E-commerce web app with online checkout and credit card payment</p>
          <div className='flex flex-wrap gap-2 my-2'>
            {ecommerceTags.map((tag) => (
              <span className='rounded-full bg-sky-500 px-2 py-1 text-xs'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='border border-[#3c454d] rounded p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <RepoIcon />
              <a
                href='https://github.com/benjaminpowell24/nginx-load-balancer'
                className='mx-2 font-semibold text-sky-600'
                target='_blank'
              >
                Application Load Balancer
              </a>
            </div>
            <div>
              <GrabberIcon />
            </div>
          </div>
          <p>
            Developed an application load balancer using Nginx and Docker to
            demonstrate the principles of load balancing and high availability.
          </p>
          <div className='flex flex-wrap gap-2 my-2'>
            {loadBalancerTags.map((tag) => (
              <span className='rounded-full bg-sky-500 px-2 py-1 text-xs'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
