import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
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

  const revealClass = (base, delayClass) => {
    return `${base} transition-all duration-700 ${delayClass} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <span className={`${revealClass('inline-flex', 'delay-75')} items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-12`}>
          <span className="w-8 h-px bg-accent"></span>
          Get in Touch
        </span>

        {/* Content Body */}
        <div className={revealClass('space-y-12', 'delay-150')}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary leading-tight max-w-4xl mb-16 select-none">
            Looking for an intern or junior dev?
            <span className="text-accent"> Let's build something together.</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            {/* Email Card Link */}
            <a 
              href="mailto:princesabalpara2006@gmail.com"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-secondary/10 hover:border-accent/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-secondary/40 mb-1">Email me at</p>
                <p className="text-lg text-secondary group-hover:text-accent transition-colors break-all">
                  princesabalpara2006@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-secondary/20 group-hover:text-accent transition-colors flex-shrink-0" />
            </a>

            {/* University Card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-secondary/10">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-secondary/40 mb-1">Studying at</p>
                <p className="text-lg text-secondary">Silver Oak University, Gota</p>
              </div>
            </div>
          </div>

          {/* Social Links Footer */}
          <div className="mt-16 pt-16 border-t border-secondary/10">
            <p className="text-sm text-secondary/40 mb-6">Find me on</p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/_prince_.239?igsh=cXZtcTJsMzVhNjAw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-accent transition-colors text-lg font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/prince-sabalpara-58541a331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-accent transition-colors text-lg font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
