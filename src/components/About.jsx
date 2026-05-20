import { useEffect, useRef, useState } from 'react';
import profilePic from '../profile_picture.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const revealClass = (delayClass) => {
    return `transition-all duration-700 ${delayClass} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`;
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Header */}
            <span className={`${revealClass('delay-100')} inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-8`}>
              <span className="w-8 h-px bg-accent"></span>
              About
            </span>

            {/* Description Paragraphs */}
            <div className={`${revealClass('delay-200')} space-y-6 text-lg md:text-xl text-secondary/80 leading-relaxed`}>
              <p>
                I am a <span className="text-accent font-medium">passionate and dedicated</span> Computer Science Engineering student currently pursuing my 5th Semester with Honors in <span className="text-accent font-medium">Artificial Intelligence and Data Science</span>. I enjoy exploring innovative technologies, solving real-world problems, and continuously improving my technical and leadership skills.
              </p>
              <p>
                With a strong interest in AI, emerging technologies, and community leadership, I actively participate in technical activities, research-oriented learning, and professional development programs.
              </p>
              <p>
                Serving as a <span className="text-accent font-medium">Treasurer</span> at Silver Oak University IEEE  Women in Engineering Student Branch Affinity Group.
              </p>
            </div>

            {/* Core Technologies */}
            <div className={`${revealClass('delay-400')} mt-12 pt-12 border-t border-secondary/10`}>
              <span className="text-sm text-secondary/40 tracking-[0.15em] uppercase">Technologies I Use</span>
              <p className="mt-4 text-base md:text-lg text-secondary/60">
                Java • Python • C • CSS • HTML • JavaScript • PHP
              </p>
            </div>
          </div>

          {/* Photo Frame Column */}
          <div className={`${revealClass('delay-300')} lg:col-span-5 flex justify-center`}>
            <div className="relative group w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px]">
              {/* Background decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-dashed border-accent/20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 -z-10"></div>
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-blue-600 opacity-20 blur-md group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              {/* The Frame border / offset block */}
              <div className="absolute inset-0 rounded-2xl border border-secondary/10 group-hover:border-accent/50 transition-colors duration-500"></div>
              {/* Inner container holding the image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                <img 
                  src={profilePic} 
                  alt="Prince" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
                {/* Overlay highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
