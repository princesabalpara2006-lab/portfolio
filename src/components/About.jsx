import { useEffect, useRef, useState } from 'react';

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
    <section id="about" ref={sectionRef} className="relative py-32 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Header */}
          <span className={`${revealClass('delay-100')} inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-8`}>
            <span className="w-8 h-px bg-accent"></span>
            About
          </span>

          {/* Description Paragraphs */}
          <div className={`${revealClass('delay-200')} space-y-6 text-lg md:text-xl lg:text-2xl text-secondary/80 leading-relaxed`}>
            <p>
              I am a <span className="text-accent font-medium">passionate and dedicated</span> Computer Science Engineering student currently pursuing my 5th Semester with Honors in <span className="text-accent font-medium">Artificial Intelligence and Data Science</span>. I enjoy exploring innovative technologies, solving real-world problems, and continuously improving my technical and leadership skills.
            </p>
            <p>
              With a strong interest in AI, emerging technologies, and community leadership, I actively participate in technical activities, research-oriented learning, and professional development programs.
            </p>
            <p>
              Serving as a <span className="text-accent font-medium">Treasurer</span> at IEEE Silver Oak University Women in Engineering Student Branch Affinity Group.
            </p>
          </div>

          {/* Core Technologies */}
          <div className={`${revealClass('delay-400')} mt-16 pt-16 border-t border-secondary/10`}>
            <span className="text-sm text-secondary/40 tracking-[0.15em] uppercase">Technologies I Use</span>
            <p className="mt-4 text-lg text-secondary/60">
              Java • Python • C • CSS • HTML • JavaScript • PHP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
