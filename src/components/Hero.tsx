import React from 'react';
import { ArrowRight, Github, Download } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-500">Aquib Ahmed</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            <TypingAnimation />
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            I craft beautiful, responsive, and user-friendly websites
            <br className="hidden md:block" />
            using modern technologies and best practices.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-white rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="https://github.com/aquibahmed21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              GitHub Profile
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
