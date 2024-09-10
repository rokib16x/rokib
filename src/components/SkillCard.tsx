import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-700 bg-opacity-50 p-4 rounded-lg text-center"
    >
      <motion.div
        initial={{ rotateY: 0 }}
        whileTap={{ rotateY: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="text-4xl mb-2 mx-auto text-teal-300" />
        <p>{name}</p>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;