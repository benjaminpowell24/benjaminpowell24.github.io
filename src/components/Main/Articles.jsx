import React from 'react'

const Articles = () => {
  return (
    <section id='articles'>
      <h1 className='text-2xl font-bold my-5'>Articles</h1>
      <div className='grid lg:grid-cols-2 gap-3'>
        <article className='border border-[#3c454d] rounded p-4'>
          <a
            href='https://medium.com/@benjaminpowell24/how-to-resolve-divergent-branches-in-git-435c944e4618'
            className='font-semibold text-sky-500'
            target='_blank'
          >
            How to Resolve Divergent Branches in Git
          </a>
          <div className='my-2 flex items-center justify-between'>
            <p>Author: Benjamin Powell</p>
            <p>Feb 23, 2025</p>
            <div></div>
          </div>
        </article>
        <article className='border border-[#3c454d] rounded p-4'>
          <a
            href='https://medium.com/@benjaminpowell24/how-to-implement-a-load-balancer-with-nginx-and-docker-1e2d68c676b5'
            className='font-semibold text-sky-500'
            target='_blank'
          >
            How to Implement a Load Balancer with NGINX and Docker
          </a>
          <div className='my-2 flex items-center justify-between'>
            <p>Author: Benjamin Powell</p>
            <p>Feb 2, 2025</p>
            <div></div>
          </div>
        </article>
        <article className='border border-[#3c454d] rounded p-4'>
          <a
            href='https://medium.com/@benjaminpowell24/software-system-design-simplified-for-beginners-fe487eab329d'
            className='font-semibold text-sky-500'
            target='_blank'
          >
            Software System Design Simplified for Beginners
          </a>
          <div className='my-2 flex items-center justify-between'>
            <p>Author: Benjamin Powell</p>
            <p>Nov 6, 2023</p>
            <div></div>
          </div>
        </article>
        <article className='border border-[#3c454d] rounded p-4'>
          <a
            href='https://medium.com/@benjaminpowell24/how-to-use-https-on-localhost-3339cd493ff6'
            className='font-semibold text-sky-500'
            target='_blank'
          >
            How to use HTTPS on localhost
          </a>
          <div className='my-2 flex items-center justify-between'>
            <p>Author: Benjamin Powell</p>
            <p>Nov 24, 2023</p>
            <div></div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Articles
