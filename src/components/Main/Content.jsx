const Content = () => {
  return (
    <div>
      <section id='projects'>
        <h1 className='text-2xl'>Projects</h1>
        <div className='grid md:grid-cols-2 gap-3'>
          <div className='border border-gray-200 rounded p-4'>Content 1</div>
          <div className='border border-gray-200 rounded p-4'>Content 2</div>
          <div className='border border-gray-200 rounded p-4'>Content 3</div>
          <div className='border border-gray-200 rounded p-4'>Content 4</div>
        </div>
      </section>
      <section id='about'>
        <h1 className='text-2xl'>About Ben</h1>
        <p>
          Ben is a Software Engineer who loves what he does. What does he love
          about it? The fact that he's good at it. Ben also likes to experiment
          and try new technologies.
        </p>
        <p>
          Ben loves to mentor younger students and developers to empower them as
          his own small way of giving back. He also writes technical articles
          but his biggest achievement is getting you to open this website.
          Thanks.{' '}
        </p>
      </section>
    </div>
  )
}

export default Content
