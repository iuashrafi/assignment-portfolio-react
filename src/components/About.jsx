import reactLogo from "../assets/react.svg";

const About = () => {
  return (
    <section id="About" className="w-full  bg-indigo-200 ">
      <div className="container mx-auto min-h-screen flex flex-row justify-around items-center p-8">
        <div>
          <p className="space-y-2">
            <h1 className="text-2xl">Hello,</h1>
            <h2 className="text-4xl">This is John Doe</h2>
            <p className="text-xl">
              Based in the India, I'm a full stack developer
              <br /> passionate about building web apps that users love.
            </p>
          </p>
          <button className="mt-8 px-4 py-3 border-2 border-indigo-500 rounded-full bg-indigo-500 font-semibold text-white shadow-lg">
            Hire Me
          </button>
        </div>
        <div className="relative">
          <img
            src="../src/assets/johndoe.jpg"
            alt="John Doe"
            className="h-80 rounded-2xl shadow-lg"
          />
          <img
            src={reactLogo}
            alt=""
            className="h-16 absolute bottom-4 -left-8"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
