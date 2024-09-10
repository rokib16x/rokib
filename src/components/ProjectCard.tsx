import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showMobile, setShowMobile] = useState(false);
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({ opacity: 0, y: 20 });
    setShowMobile(true);
    await controls.start({ opacity: 1, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden group z-50" // Added z-50
      onClick={handleClick}
    >
      <motion.div animate={controls}>
        {showMobile ? (
          <div className="bg-gray-900 border-4 border-gray-700 rounded-3xl p-4 w-full h-64 overflow-hidden">
            <div className="bg-gray-800 rounded-2xl p-2 h-full overflow-y-auto text-green-400 font-mono text-sm">
              <div className="mb-4">
                <div>{`> Project: ${project.title}`}</div>
                <div>{`> Description: ${project.description}`}</div>
                <div>{`> Tech: ${project.tech}`}</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-teal-300 mb-2">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <p className="text-sm text-teal-200">
              Technologies: {project.tech}
            </p>
          </>
        )}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.span
            key={i}
            className="text-green-400 text-2xl absolute"
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 0, y: 100 }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
