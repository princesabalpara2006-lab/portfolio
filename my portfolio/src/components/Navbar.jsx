import { Home, User, Code, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Side Navbar */}
      <nav className="fixed left-0 top-0 h-screen w-20 z-50 hidden lg:flex flex-col items-center justify-between py-8 border-r border-secondary/5 bg-background">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-lg font-display font-bold tracking-tight text-secondary hover:text-accent transition-colors duration-300 vertical-rl"
        >
          Prince Sabalpara<span className="text-accent">.</span>
        </button>

        <div className="flex flex-col items-center gap-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-secondary/40 hover:text-secondary hover:bg-secondary/5'
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="absolute left-16 px-4 py-2 bg-muted text-secondary text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-300 border border-secondary/10 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
          <span className="text-[10px] font-medium text-secondary/30 tracking-[0.2em] vertical-rl select-none">SCROLL</span>
        </div>
      </nav>

      {/* Mobile Top Navbar Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-md border-b border-secondary/5">
        <div className="flex items-center justify-between px-6 py-5">
          <button onClick={() => scrollToSection('home')} className="text-xl font-display font-bold tracking-tight text-secondary">
            PRINCE<span class="text-accent">.</span>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative z-50 w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
              isMenuOpen ? 'bg-accent text-primary' : 'bg-muted text-secondary'
            }`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-primary"></div>
        <div className="relative h-full flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-24 lg:pt-0 overflow-hidden">
            <nav className="space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link group flex items-center justify-between w-full text-left py-2 sm:py-3 transition-all duration-500"
                    style={{
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-2rem)',
                      opacity: isMenuOpen ? '1' : '0',
                      transitionDelay: `${200 + index * 80}ms`
                    }}
                  >
                    <span className={`text-4xl sm:text-5xl md:text-7xl font-display font-bold transition-all duration-300 ${
                      isActive ? 'text-accent' : 'text-secondary group-hover:text-accent'
                    }`}>
                      {item.label}
                    </span>
                    <ArrowUpRight className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? 'text-accent opacity-100 rotate-0' 
                        : 'text-secondary/30 group-hover:text-accent group-hover:rotate-45'
                    }`} />
                  </button>
                );
              })}
            </nav>
          </div>
          
          <div 
            className={`lg:w-96 flex flex-col justify-end p-8 md:p-16 transition-all duration-700 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-secondary/40 text-xs uppercase tracking-widest mb-2">Get in touch</p>
                <a 
                  href="mailto:princesabalpara2006@gmail.com"
                  className="text-secondary hover:text-accent transition-colors text-lg font-medium"
                >
                  princesabalpara2006@gmail.com
                </a>
              </div>
              <div>
                <p className="text-secondary/40 text-xs uppercase tracking-widest mb-2">University</p>
                <p className="text-secondary text-lg font-medium">Silver Oak University, Gota</p>
              </div>
              <div>
                <p className="text-secondary/40 text-xs uppercase tracking-widest mb-3">Links</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/_prince_.239?igsh=cXZtcTJsMzVhNjAw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary/50 hover:text-accent transition-colors text-sm font-medium hover-underline"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/prince-sabalpara-58541a331" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/50 hover:text-accent transition-colors text-sm font-medium hover-underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
