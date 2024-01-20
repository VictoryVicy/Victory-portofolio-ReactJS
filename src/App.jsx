import "./App.css";
import Profile from "./assets/profile.jpg";
import Project1 from "./assets/project1.jpg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Project4 from "./assets/project4.jpg";

export default function App() {
  return (
    <>
      {/* Header Section */}
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-xl">Victory Portofolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 py-10 flex gap-6">
            <div>
              <h1 className="font-bold text-4xl">Hello, I'm Victory,</h1>
              <h1 className="font-bold text-4xl mt-1 gradient-text">
                fullstack developer.
              </h1>
              <p className="mt-4 text-gray-400">
                Informatics student with web development skills, learning more
                about machine learning and data mining.
              </p>
            </div>
            <div className="relative">
              <img
                src={Profile}
                width={125}
                alt="Victory"
                className="rounded-full relative z-10"
              />
            </div>
          </div>
        </section>
        {/* Project Section */}
        <section>
          <div className="container m-auto px-4 py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img
                  src={Project1}
                  className="w-full h-auto"
                  alt="Project 1"
                  width={220}
                />
                <h3 className="text-2xl font-semibold mt-8">
                  Foto orang tampan
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Skill foto ini mah, ga pake bahasa pemrograman
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img
                  src={Project2}
                  className="w-full h-auto"
                  alt="Project 1"
                  width={220}
                />
                <h3 className="text-2xl font-semibold mt-8">
                  Foto orang tampan
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Skill foto ini mah, ga pake bahasa pemrograman
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img
                  src={Project3}
                  className="w-full h-auto"
                  alt="Project 1"
                  width={220}
                />
                <h3 className="text-2xl font-semibold mt-8">
                  Foto orang tampan
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Skill foto ini mah, ga pake bahasa pemrograman
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img
                  src={Project4}
                  className="w-full h-auto"
                  alt="Project 1"
                  width={220}
                />
                <h3 className="text-2xl font-semibold mt-8">
                  Foto orang tampan
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Skill foto ini mah, ga pake bahasa pemrograman
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-4 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="px-4 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="py-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Techonologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Bootstrap, Tailwind</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[78%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript Vanilla</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PHP & MySQL</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Laravel Blade</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skill section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional skills and technologies
            </h2>
            <div className="flex justify-between mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  TeamWork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Quick Learning
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  TeamWork
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 pl-12 relative before:absolute before:top-0 before:left-20 before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
                <h3 className="absolute -left-9 text-lg font-semibold">2017</h3>
                <p>Lulus dari SD</p>
              </div>
              <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
                <h3 className="absolute -left-9 text-lg font-semibold">2019</h3>
                <p>Lulus dari SMP</p>
              </div>
              <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
                <h3 className="absolute -left-9 text-lg font-semibold">2022</h3>
                <p>Lulus dari SMA</p>
              </div>
              <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
                <h3 className="absolute -left-9 text-lg font-semibold">2017</h3>
                <p>Menempuh jenjang perkuliahan</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4">
          <div>
            <p className="text-gray-300 tetx-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>

              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
