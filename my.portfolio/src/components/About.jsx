import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae veniam aliquid aperiam enim nulla a deleniti, ad quam ducimus vitae culpa, sed, aut est minima nostrum delectus maiores quaerat. Debitis, voluptate, nobis architecto harum pariatur eum minima officiis totam eos tempora porro ab sunt deserunt iste amet itaque ipsa.
            </p>
            
            <br />
            
            <p className='text-xl'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit sapiente dolore aspernatur cum voluptatem cupiditate itaque sint odio nulla quae placeat, eveniet, necessitatibus perferendis cumque maiores nostrum ullam? Perferendis voluptatibus sed illo et ea culpa modi esse, libero magni voluptatem deserunt illum porro odio quidem eveniet voluptas, corrupti vero! 
            </p>
        </div>
    </div>
  )
}

export default About