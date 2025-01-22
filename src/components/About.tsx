import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive, and user-friendly interfaces.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800"
              alt="Developer working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-xl text-gray-600 mb-8">
              I'm a passionate web developer with 6+ years of experience in creating modern web applications.
              I specialize in React, TypeScript, and modern frontend technologies.
            </p>
            <div className="grid gap-6">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-4">
                  <div className="text-blue-500">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;