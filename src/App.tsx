import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPython, SiPhp, SiMysql } from 'react-icons/si';
import Header from './components/Header';
import MobileEmulator from './components/MobileEmulator';
import SkillCard from './components/SkillCard';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

  }, []);

  const skills = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiReact, name: 'React Native' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: SiPython, name: 'Python' },
    { icon: FaJava, name: 'Java' },
    { icon: SiPhp, name: 'PHP' },
    { icon: SiMysql, name: 'MySQL' },
  ];

  const projects = [
    {
      title: 'Minnah',
      description: 'Mobile app for Muslims with features like Quranic exploration, mosque locator, and more.',
      tech: 'Node.js, React Native',
    },
    {
      title: 'uniHub',
      description: 'Online platform for teachers and students to connect and learn together.',
      tech: 'PHP, MySQL, HTML, CSS, JavaScript',
    },
    {
      title: 'AgroGrove',
      description: 'Platform for farmers to sell products, hire workers, and get assistance.',
      tech: 'PHP, MySQL, HTML, CSS, JavaScript',
    },
  ];

  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-200">
      <Header />

      <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="/profile.png?height=128&width=128"
              alt="Md Rokibul Hasan"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-4xl md:text-6xl font-bold text-teal-300 mb-2">Md Rokibul Hasan</h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-6">Junior Software Developer</p>
            <div className="flex justify-center space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://github.com/rokib16x" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl hover:text-teal-300 transition-colors duration-300" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/rokibulhasanshad" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-teal-300 transition-colors duration-300" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="mailto:rokibulhasanshad@gmail.com">
                <FaEnvelope className="text-3xl hover:text-teal-300 transition-colors duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-teal-300 mb-8"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg max-w-2xl"
            >
              I'm a software engineer passionate about mobile app development. My goal is to deliver high-quality work and become one of the best in my field. I'm always learning and improving my skills through various web and mobile projects.
            </motion.p>
          </div>
        </section>

        <section id="mobile-and-terminal" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-teal-300 mb-8"
            >
              Mobile Emulator & Interactive Terminal
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <MobileEmulator />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full md:w-1/2"
              >
                <Terminal />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-teal-300 mb-8"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-teal-300 mb-8"
            >
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-teal-300 mb-8"
            >
              Contact Me
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg mx-auto"
            >
              <div className="mb-4">
                <input type="text" placeholder="Name" className="w-full p-2 bg-gray-700 bg-opacity-50 rounded border border-teal-500 text-teal-100 placeholder-teal-300" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 bg-gray-700 bg-opacity-50 rounded border border-teal-500 text-teal-100 placeholder-teal-300" required />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" rows={5} className="w-full p-2 bg-gray-700 bg-opacity-50 rounded border border-teal-500 text-teal-100 placeholder-teal-300" required></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-teal-400 transition duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 text-center">
        <p>&copy; 2023 Md Rokibul Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
}