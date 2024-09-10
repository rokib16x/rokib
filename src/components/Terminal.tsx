import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string[]>(['Welcome to the interactive terminal! Type "help" for a list of commands.']);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    let response = '';

    switch (trimmedInput) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        response = "I'm Md Rokibul Hasan, a passionate mobile application developer specializing in React Native, iOS, and Android development.";
        break;
      case 'skills':
        response = 'My skills include: JavaScript, React Native, Swift, Kotlin, Firebase, and Git.';
        break;
      case 'projects':
        response = 'Some of my projects: Minnah (Islamic app), uniHub (education platform), AgroGrove (agriculture platform).';
        break;
      case 'contact':
        response = 'You can reach me at rokibulhasanshad@gmail.com or connect with me on LinkedIn.';
        break;
      case 'clear':
        setOutput([]);
        setInput('');
        return;
      default:
        response = `Command not recognized: ${input}. Type "help" for a list of commands.`;
    }

    setOutput([...output, `> ${input}`, response]);
    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border-2 border-green-500 rounded-lg p-4 w-full max-w-2xl mx-auto h-80 overflow-hidden"
    >
      <div ref={terminalRef} className="h-64 overflow-y-auto mb-4 font-mono text-sm">
        {output.map((line, index) => (
          <div key={index} className={line.startsWith('>') ? 'text-green-400' : 'text-gray-300'}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="text-green-400 mr-2">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none text-green-400"
          aria-label="Terminal input"
        />
      </form>
    </motion.div>
  );
};

export default Terminal;