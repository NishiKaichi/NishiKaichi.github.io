import { Github, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="font-semibold text-lg">NishiKaichi</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/NishiKaichi" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
