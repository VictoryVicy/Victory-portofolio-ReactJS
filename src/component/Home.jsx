import Profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home">
      <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-16">
        <div>
          <h1 className="font-bold text-4xl text-white">
            Hello, I am Victory,
          </h1>
          <h1 className="font-bold text-4xl mt-1 gradient-text running-text">
            fullstack developer.
          </h1>
          <p className="mt-4 text-gray-400">
            Informatics student with web development skills, learning more about
            machine learning and data mining.
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
  );
}
