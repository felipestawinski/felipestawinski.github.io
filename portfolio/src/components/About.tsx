const About = () => {
  return (
    <section id="about" className="py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
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
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;