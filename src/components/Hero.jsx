import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const animClass = (base, delayClass) => {
    return `${base} transition-all duration-1000 ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${delayClass}`;
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px]"></div>
      </div>

      {/* Top Scrolling Marquee */}
      <div className={`relative pt-12 lg:pt-16 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-marquee whitespace-nowrap select-none">
          <span className="text-[12vw] font-display font-bold text-secondary/[0.03] mx-4 leading-none">STUDENT • DEVELOPER • PROGRAMMER • LEARNER •</span>
          <span className="text-[12vw] font-display font-bold text-secondary/[0.03] mx-4 leading-none">STUDENT • DEVELOPER • PROGRAMMER • LEARNER •</span>
          <span className="text-[12vw] font-display font-bold text-secondary/[0.03] mx-4 leading-none">STUDENT • DEVELOPER • PROGRAMMER • LEARNER •</span>
          <span className="text-[12vw] font-display font-bold text-secondary/[0.03] mx-4 leading-none">STUDENT • DEVELOPER • PROGRAMMER • LEARNER •</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-6xl mx-auto text-center">
            {/* Tagline */}
            <div className={animClass('mb-6', 'delay-300')}>
              <span className="inline-flex items-center gap-4 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase select-none">
                <span className="w-8 h-px bg-accent"></span>
                Computer Science Student
                <span className="w-8 h-px bg-accent"></span>
              </span>
            </div>

            {/* Name */}
            <h1 className={`${animClass('relative', 'delay-500')} select-none`}>
              <span className="hero-text-stroke absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tight leading-none">
                PRINCE
              </span>
              <span className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tight text-secondary leading-none">
                PRINCE
              </span>
            </h1>

            {/* Sub-tagline */}
            <div className={animClass('mt-4 mb-8', 'delay-700')}>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-secondary/60">
                I build <span className="text-accent font-medium">software solutions</span> that scale
              </p>
            </div>

            {/* Tag Badges */}
            <div className={animClass('flex flex-wrap justify-center gap-3 mb-8', 'delay-900')}>
              {['Web Development', 'Algorithms', 'Data Structures', 'UI/UX Design'].map((tag) => (
                <span 
                  key={tag}
                  className="px-5 py-2.5 text-sm font-medium text-secondary/60 border border-secondary/10 rounded-full hover:border-accent hover:text-accent transition-all duration-300 cursor-default select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className={animClass('flex flex-wrap justify-center gap-4', 'delay-1000')}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-secondary/5">
            {/* Metrics */}
            <div className={animClass('flex gap-12', 'delay-[1200ms]')}>
              <div className="text-center md:text-left select-none">
                <div className="text-3xl md:text-4xl font-display font-bold text-secondary">2+</div>
                <div className="text-xs text-secondary/40 mt-1 tracking-wider uppercase">Years Coding</div>
              </div>
              <div className="text-center md:text-left select-none">
                <div className="text-3xl md:text-4xl font-display font-bold text-secondary">9</div>
                <div className="text-xs text-secondary/40 mt-1 tracking-wider uppercase">GPA</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <button 
              onClick={() => scrollToSection('about')}
              className={`flex items-center gap-3 text-secondary/40 hover:text-accent transition-all duration-300 group delay-[1300ms] ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-xs tracking-widest uppercase select-none">Scroll Down</span>
              <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Reversed Marquee */}
      <div className={`absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-marquee-reverse whitespace-nowrap select-none">
          <span className="text-[8vw] font-display font-bold text-secondary/[0.02] mx-4 leading-none">CODING • ENGINEERING • INNOVATION • LOGIC •</span>
          <span className="text-[8vw] font-display font-bold text-secondary/[0.02] mx-4 leading-none">CODING • ENGINEERING • INNOVATION • LOGIC •</span>
          <span className="text-[8vw] font-display font-bold text-secondary/[0.02] mx-4 leading-none">CODING • ENGINEERING • INNOVATION • LOGIC •</span>
          <span className="text-[8vw] font-display font-bold text-secondary/[0.02] mx-4 leading-none">CODING • ENGINEERING • INNOVATION • LOGIC •</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
