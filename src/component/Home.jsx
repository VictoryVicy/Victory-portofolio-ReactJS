import Profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="sm:mt-8 mt-12">
      <div className="container m-auto px-12 pt-12 sm:py-32 flex flex-col sm:flex-row gap-16 grid grid-cols-12">
        <div className="md:col-span-6">
          <h1 className="font-bold text-4xl text-white mt-20">
            Hello, I am Victory,
          </h1>
          <h1 className="font-bold text-4xl mt-1 gradient-text running-text">
            fullstack developer.
          </h1>
          <p className="text-gray-400 mt-8">
            I am a passionate Informatics student. I am currently in my 4th
            semester and am aiming to become an expert software developer.
            Although I do not have any official work experience, I am very
            enthusiastic about IT-related jobs. Currently, I am deepening my
            understanding of machine learning, especially in the field of
            natural language processing (NLP). I believe my skills in web
            development and deep understanding of machine learning will give me
            the opportunity to participate in future challenges in the world of
            technology.a
          </p>
        </div>
        <div className="relative ml-20 md:col-span-6">
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
