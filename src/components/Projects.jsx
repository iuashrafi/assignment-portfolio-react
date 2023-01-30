import Card from "./subComponents/Card";
import ProjectImg from "../assets/thumbnail-project-1-small.webp";
const Projects = () => {
  return (
    <section id="Projects" className="w-full bg-red-300">
      <div className="container mx-auto min-h-screen p-8">
        <h1 className="text-2xl text-semibold underline decoration-dashed pt-6 ">
          Projects
        </h1>
        <div className="grid grid-cols-3 gap-8 p-8">
          <Card ProjectImg={ProjectImg} />
          <Card ProjectImg={ProjectImg} />
          <Card ProjectImg={ProjectImg} />
          <Card ProjectImg={ProjectImg} />
          <Card ProjectImg={ProjectImg} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
