import profileImg from "../assets/profile.jpeg";

function About() {
return ( <section
   id="about"
   className="bg-slate-900 text-white py-24 px-6"
 > <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
      About Me
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <img
          src={profileImg}
          alt="Shristi Pandey"
          className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-cyan-400"
        />
      </div>

      <div>

        <p className="text-gray-300 text-lg leading-8 mb-6">
          I'm ShristiPandey, a passionate Full Stack Web Developer and
          B.Tech CSE student who enjoys building responsive and modern
          web applications using React, JavaScript, Tailwind CSS,
          Firebase, MongoDB, and other modern technologies.
        </p>

        <p className="text-gray-400 text-lg leading-8">
          I love turning ideas into real-world projects, continuously
          learning new technologies, and improving my problem-solving
          skills through hands-on development. My goal is to build
          impactful products while growing as a software developer.
        </p>

      </div>

    </div>

  </div>
</section>

);
}

export default About;
