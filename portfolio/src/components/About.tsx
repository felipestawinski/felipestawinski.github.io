const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Hello! I'm Felipe Stawinski Suzuki
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate software developer with a strong foundation in both frontend and backend technologies. 
              Currently studying at UTFPR, I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or learning about the latest trends in web development.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Student at UTFPR</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Full Stack Developer</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Open Source Contributor</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-gray-700">Technology Enthusiast</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;