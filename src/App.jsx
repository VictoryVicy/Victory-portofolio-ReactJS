import './App.css'
import Profile from './assets/profile.jpg'
import Project1 from './assets/project1.jpg'
import Project2 from './assets/project2.jpg'
import Project3 from './assets/project3.jpg'
import Project4 from './assets/project4.jpg'

export default function App() {
  return (
    <>
    {/* Header Section */}
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between'>
            <div>
              <h1 className='font-bold text-xl'>Victory Portofolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello, I'm Victory,</h1>
              <h1 className='font-bold text-4xl mt-1 gradient-text'>fullstack developer.</h1>
              <p className='mt-4 text-gray-400'>Informatics student with web development skills, learning more about machine learning and data mining.</p>
            </div>
            <div className='relative'>
              <img src={Profile} width={125} alt='Victory' className='rounded-full relative z-10' />
            </div>
          </div>
        </section>
      {/* Project Section */}
        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project1} className='w-full h-auto' alt='Project 1'width={220} />
                <h3 className='text-2xl font-semibold mt-8'>Foto orang tampan</h3>
                <p className='text-gray-400 text-sm mt-2'>Skill foto ini mah, ga pake bahasa pemrograman</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project2} className='w-full h-auto' alt='Project 1'width={220} />
                <h3 className='text-2xl font-semibold mt-8'>Foto orang tampan</h3>
                <p className='text-gray-400 text-sm mt-2'>Skill foto ini mah, ga pake bahasa pemrograman</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project3} className='w-full h-auto' alt='Project 1'width={220} />
                <h3 className='text-2xl font-semibold mt-8'>Foto orang tampan</h3>
                <p className='text-gray-400 text-sm mt-2'>Skill foto ini mah, ga pake bahasa pemrograman</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={Project4} className='w-full h-auto' alt='Project 1'width={220} />
                <h3 className='text-2xl font-semibold mt-8'>Foto orang tampan</h3>
                <p className='text-gray-400 text-sm mt-2'>Skill foto ini mah, ga pake bahasa pemrograman</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                  <button className='px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500'>Checkout github</button>
                </div>
              </div>
            </div>
          </div>
           {/* Technologies Section */}
          <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Techonologies</h2>
          </div>
          </section>
        </section>
      </main>
    </>
  )
}