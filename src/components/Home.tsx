import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaCode,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 text-white bg-gradient-to-b from-black to-gray-900">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 md:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto mb-8 text-lg text-gray-300 md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I'm Ashish Kumar, a passionate frontend developer with expertise in
          modern web technologies. Explore my work and skills below.
        </motion.p>
        <Link to="/projects">
          <motion.button
            className="px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.button>
        </Link>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <motion.h2
          className="mb-12 text-4xl font-semibold text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4 lg:grid-cols-4">
          {/* Skill Icons with Hover Effects */}
          {[
            {
              name: "JavaScript",
              icon: <FaJs className="text-4xl text-yellow-400" />,
            },
            {
              name: "TypeScript",
              icon: <FaCode className="text-4xl text-blue-500" />,
            },
            {
              name: "React",
              icon: <FaReact className="text-4xl text-blue-400" />,
            },
            {
              name: "Tailwind CSS",
              icon: <FaCss3Alt className="text-4xl text-teal-400" />,
            },
            {
              name: "Redux",
              icon: <FaNodeJs className="text-4xl text-purple-400" />,
            },
            {
              name: "Git",
              icon: <FaGitAlt className="text-4xl text-orange-400" />,
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 transition-transform duration-300 bg-gray-800 rounded-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
