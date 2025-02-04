import React from 'react';
import SkillCategory from './SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', level: 85 },
        { name: 'Javascript', level: 80 },
        { name: 'React', level: 55 },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 55 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 60 },
      ],
    },
    {
      id: 3,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;