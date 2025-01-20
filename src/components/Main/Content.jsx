const Content = () => {
  return (
    <div>
      <section id='projects' className='my-10'>
        <h1 className='text-2xl font-bold my-5'>Projects</h1>
        <div className='grid md:grid-cols-2 gap-3'>
          <div className='border border-gray-200 rounded p-4'>Content 1</div>
          <div className='border border-gray-200 rounded p-4'>Content 2</div>
          <div className='border border-gray-200 rounded p-4'>Content 3</div>
          <div className='border border-gray-200 rounded p-4'>Content 4</div>
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
