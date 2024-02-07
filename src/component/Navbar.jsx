import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="bg-transparent backdrop-filter backdrop-blur fixed top-0 w-full text-white z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Victory.</h1>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex">
              <ul className="flex gap-8">
                <li>
                  <a className="cursor-pointer" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#skill">
                    Skill
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#about">
                    About me
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer"
                    href="https://github.com/VictoryVicy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    className="cursor-pointer"
                    href="#home"
                    onClick={toggleNavbar}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#projects"
                    onClick={toggleNavbar}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#skill"
                    onClick={toggleNavbar}
                  >
                    Skill
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#about"
                    onClick={toggleNavbar}
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="https://github.com/VictoryVicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleNavbar}
                  >
                    My Github
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
