import TextType from '../app/TextType';
import RippleGrid from '../app/RippleGrid';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      {/* RippleGrid Background */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#8E51FF"
          rippleIntensity={0.05}
          gridSize={20}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.4}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-violet-800 dark:text-violet-500 mb-6 transition-colors duration-300">
          Hi, I'm Felipe :)
        </h1>
        <div className="text-2xl md:text-3xl text-gray-900 dark:text-gray-300 mb-8 h-16 flex items-center justify-center transition-colors duration-300">
          <TextType
            text={[
              "Full Stack Developer",
              "Curitiba, Brazil",
              "Systems Information, UTFPR (8/8)"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="font-medium"
          />
        </div>
        <p className="text-xl text-gray-800 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
          Passionate about creating innovative solutions and building amazing user experiences
          with modern technologies. When I'm not coding, I enjoy playing guitar/bass and hiking.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* GitHub */}
          <a
            href="https://github.com/felipestawinski"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-violet-600 hover:border-violet-600 dark:hover:bg-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/felipe-stawinski-suzuki-654002238"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-violet-600 hover:border-violet-600 dark:hover:bg-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              LinkedIn
            </span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-violet-600 hover:border-violet-600 dark:hover:bg-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Image - Manually translated 10px down */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10.5 z-10">
        <div className="relative inline-block">
          {/* Background circle/shape behind the image */}
          <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/30 rounded-full blur-xl scale-110 -z-10"></div>
          
          <img 
            src="/my-image.png" 
            alt="Portfolio illustration" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;