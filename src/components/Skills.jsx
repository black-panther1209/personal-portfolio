function Skills() {

const skills = [
"C",
"C++",
"Java",
"Python",
"JavaScript",
"HTML5",
"CSS3",
"React.js",
"Tailwind CSS",
"Vite",
"Responsive Web Design",
"MongoDB",
"Firebase",
"Git",
"GitHub",
"Netlify",
"Vercel",
"Data Structures & Algorithms",
"Object-Oriented Programming",
"REST APIs",
"Component-Based Architecture",
"Debugging & Problem Solving"
];

return ( <section
   id="skills"
   className="bg-slate-950 text-white py-24 px-6"
 >

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
      Skills & Technologies
    </h2>

    <p className="text-center text-gray-400 mb-14 text-lg">
      Technologies and tools I use to build modern web applications.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {skills.map((skill, index) => (

        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl py-5 px-4 text-center text-sm md:text-base font-semibold hover:border-cyan-400 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-300"
        >

          {skill}

        </div>

      ))}

    </div>

  </div>

</section>

);
}

export default Skills;
