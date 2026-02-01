import { Card, CardContent } from './ui/card';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Terminal,
  Globe
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Python', 'flask'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['studying...'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['studying...'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: ['VS Code', 'Antigravity'],
    color: 'from-gray-600 to-gray-800',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['JavaScript', 'TypeScript', 'HTML', 'Python'],
    color: 'from-yellow-500 to-amber-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            私が習得済みもしくは勉強中のスキルと技術の一部をご紹介します．
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
