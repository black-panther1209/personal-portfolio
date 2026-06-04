function Project() {
const projects = [
{
title: "Coffee Crumbs",
description:
"A full-stack coffee shop web application featuring online ordering, AI-powered recommendations, table reservations, customer reviews, order tracking, and an admin dashboard.",
link: "https://coffee-crumbs.vercel.app",
},


{
  title: "Mini CRM",
  description:
    "A customer relationship management system with authent ication, customer management, and CRUD operations designed to streamline business workflows.",
  link: "https://minicrmwebsite.vercel.app",
},


];

return ( <section
   id="projects"
   className="bg-slate-900 text-white py-24 px-6"
 > <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
      Projects
    </h2>

    <p className="text-center text-gray-400 mb-14 text-lg">
      Some of the projects I've built while learning and exploring modern web development.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300"
        >

          <h3 className="text-2xl font-bold mb-4">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-6 leading-7">
            {project.description}
          </p>

          <button
            onClick={() => window.open(project.link, "_blank")}
            className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl font-semibold transition"
          >
            View Project 🚀
          </button>

        </div>
      ))}

    </div>

  </div>
</section>


);
}

export default Project;
