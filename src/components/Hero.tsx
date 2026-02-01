import { Button } from './ui/button';
import { ArrowDown, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NishiKaichi
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                かけだし開発者
              </p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              近年急激な進化を遂げるAIに興味を持ち，少しずつ勉強している大学生です．<br />
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/NishiKaichi" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-2xl">
              <ImageWithFallback
                src="/images/test.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
