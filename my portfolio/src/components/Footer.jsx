import { ArrowUp } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-secondary/10 bg-background">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary/40 select-none">
            © {currentYear} Prince Sabalpara. All rights reserved.
          </p>
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-sm text-secondary/40 hover:text-accent transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
