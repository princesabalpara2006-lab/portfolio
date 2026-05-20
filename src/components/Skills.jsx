import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    {
      title: 'Web Development',
      desc: 'Building responsive and dynamic web applications using modern frameworks and technologies like React, Node.js, and more.'
    },
    {
      title: 'Algorithms & Data',
      desc: 'Implementing efficient algorithms and understanding complex data structures for optimized problem solving.'
    },
    {
      title: 'Database Systems',
      desc: 'Designing and managing relational and NoSQL databases for scalable data storage and quick retrieval.'
    },
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive and user-friendly interfaces with a focus on user experience and accessibility principles.'
    }
  ];

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
    return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`;
  };

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <span className={`${revealClass('delay-100')} inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-16`}>
          <span className="w-8 h-px bg-accent"></span>
          Core Competencies
        </span>

        {/* Content Tabs */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {/* Left Tab Buttons */}
          <div className="space-y-4">
            {skillsData.map((skill, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={skill.title}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`block text-left text-3xl md:text-4xl lg:text-5xl font-display font-bold transition-all duration-300 ${isActive
                    ? 'text-accent translate-x-2'
                    : 'text-secondary/30 hover:text-secondary/60 hover:translate-x-1'
                    }`}
                >
                  {skill.title}
                </button>
              );
            })}
          </div>

          {/* Right Description Area */}
          <div className="flex items-center">
            <div className="relative">
              {/* Fade transition for description text */}
              <div className="min-h-[120px] transition-all duration-300">
                <p className="text-xl md:text-2xl text-secondary/70 leading-relaxed transition-opacity duration-300">
                  {skillsData[activeTab].desc}
                </p>
              </div>

              {/* Progress Indicators */}
              <div className="mt-8 flex items-center gap-2">
                {skillsData.map((_, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${isActive
                        ? 'w-8 bg-accent'
                        : 'w-2 bg-secondary/20 hover:bg-secondary/40'
                        }`}
                      aria-label={`Go to skill slide ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
