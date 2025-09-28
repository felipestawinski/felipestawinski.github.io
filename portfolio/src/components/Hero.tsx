import TextType from '../app/TextType';
import RippleGrid from '../app/RippleGrid';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* RippleGrid Background */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#4427b9"
          rippleIntensity={0.10}
          gridSize={20}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.4}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-violet-800 mb-6">
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
            className="bg-violet-800 text-white px-8 py-3 rounded-lg hover:bg-violet-900 transition-colors duration-200 font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg hover:bg-violet-600 hover:text-white transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;