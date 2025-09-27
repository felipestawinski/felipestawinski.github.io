import TextType from '../app/TextType';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm Felipe
        </h1>
        <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-16 flex items-center justify-center">
          <TextType
            text={[
              "Full Stack Developer",
              "Software Engineer", 
              "Problem Solver",
              "Tech Enthusiast"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="font-medium"
          />
        </div>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate about creating innovative solutions and building amazing user experiences
          with modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;