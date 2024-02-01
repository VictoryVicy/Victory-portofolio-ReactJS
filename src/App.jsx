import "./App.css";
import Profile from "./assets/profile.jpg";
import Project1 from "./assets/project1.jpg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Project4 from "./assets/project4.jpg";
import Facebook from "./assets/facebook.svg";
import Linkedin from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";

export default function App() {
  return (
    <>
      {/* Header Section */}
      <header>
        <div className="fixed top-0 w-full text-white z-10">
          <div className="container m-auto px-4 py-6">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-xl">Victory.</h1>
              </div>
              <div>
                <ul className="flex gap-20">
                  <li>
                    <a
                      className="hover:text-white cursor-pointer"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white cursor-pointer"
                      href="#technologies"
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white cursor-pointer"
                      href="#about"
                    >
                      About me
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white cursor-pointer"
                    >
                     My Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-16">
            <div>
              <h1 className="font-bold text-4xl">Hello, I am Victory,</h1>
              <h1 className="font-bold text-4xl mt-1 gradient-text running-text">
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
                alt="Victory"
                className="rounded-full relative w-[200px] m-auto sm:w-[400px]"
              />
            </div>
          </div>
        </section>
        {/* Project Section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
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
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
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
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
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
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
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
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="py-10" id="technologies">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  TeamWork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick Learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engangement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 English
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RWD
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="about">
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
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a>
                  <img src={Facebook} className="w-6" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Linkedin} className="w-6" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
