import { RepoIcon, GrabberIcon } from '@primer/octicons-react'

const Content = () => {
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
    <div>
      <section id='projects' className='my-10'>
        <h1 className='text-2xl font-bold my-5'>Projects</h1>
        <div className='grid lg:grid-cols-2 gap-3'>
          <div className='border border-[#3c454d] rounded p-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <RepoIcon />
                <a href='#' className='mx-2 font-semibold text-sky-600'>
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
                <a href='#' className='mx-2 font-semibold text-sky-600'>
                  Obstacle Detector and classifier
                </a>
              </div>
              <div>
                <GrabberIcon />
              </div>
            </div>

            <p>
              Mobile app designed for obstacle detection and classification,
              developed as part of research on smart walking aids for the
              visually impaired.
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
                  href='https://amazonclone-web-app.netlify.app/'
                  className='mx-2 font-semibold text-sky-600'
                >
                  E-commerce Web App
                </a>
              </div>
              <div>
                <GrabberIcon />
              </div>
            </div>
            <p>
              E-commerce web app with online checkout and credit card payment
            </p>
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
                <a href='#' className='mx-2 font-semibold text-sky-600'>
                  Application Load Balancer
                </a>
              </div>
              <div>
                <GrabberIcon />
              </div>
            </div>
            <p>
              Developed an application load balancer using Nginx and Docker to
              demonstrate the principles of load balancing and high
              availability.
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
      <section id='articles'></section>
      <section id='about' className='my-10'>
        <h1 className='text-2xl font-bold my-5'>About Ben</h1>
        <p className='my-2'>
          Ben is a passionate Software Engineer who thrives on the challenges
          and creativity his work brings. What drives him? The joy of mastering
          complex problems and crafting elegant solutions. Ben is not just good
          at what he does—he excels because he genuinely loves it.
        </p>
        <p className='my-2'>
          An avid experimenter, Ben is always exploring new technologies and
          pushing boundaries to stay at the forefront of innovation. His work is
          grounded in three core principles:{' '}
          <span className='text-cyan-500'>Integrity</span>,
          <span className='text-cyan-500'> Trust</span>, and{' '}
          <span className='text-cyan-500'>Respect</span>—values that guide every
          project he undertakes and every relationship he builds.
        </p>
        <p className='my-2'>
          Beyond coding, Ben is dedicated to giving back. He loves mentoring
          younger students and developers, empowering them to grow and succeed
          in their own journeys. When he's not mentoring, you’ll find him
          writing technical articles, sharing insights to help others in the
          tech community. And his biggest achievement yet? Getting you to open
          this website. Thanks for stopping by!
        </p>
      </section>
    </div>
  )
}

export default Content
