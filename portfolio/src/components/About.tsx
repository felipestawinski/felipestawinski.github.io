const About = () => {
  return (
    <section id="about" className="py-2 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">About Me</h2>
          <div className="w-20 h-1 bg-violet-600 dark:bg-violet-600 mx-auto transition-colors duration-300"></div>
        </div>

        <div className="grid gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Hello! I'm Felipe Stawinski Suzuki
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
              I'm a passionate software developer with a strong foundation in both frontend and backend technologies. 
              Currently studying at UTFPR, I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or learning about the latest trends in web development.
            </p>
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;