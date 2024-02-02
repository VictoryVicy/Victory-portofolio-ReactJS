export default function Navbar() {
  return (
    <header>
      <div className="fixed top-0 w-full text-white z-10">
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-xl">Victory.</h1>
            </div>
            <div>
              <ul className="flex gap-8">
                <li>
                  <a className="hover:text-white cursor-pointer" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-white cursor-pointer" href="#skill">
                    Skill
                  </a>
                </li>
                <li>
                  <a className="hover:text-white cursor-pointer" href="#about">
                    About me
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white cursor-pointer"
                    href="https://github.com/VictoryVicy"
                    target="blank"
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
  );
}
