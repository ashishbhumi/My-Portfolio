import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 text-white bg-black">
      <motion.h2
        className="mb-12 text-4xl font-semibold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {/* Click and Eat Project */}
        <motion.div
          className="p-6 transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="mb-2 text-xl font-semibold">Click and Eat</h3>
          <p className="text-gray-400">
            The frontend for a food delivery application built using React,
            Redux, and Tailwind CSS. Integrates Swiggy's live API for real-time
            restaurant listings, menu items, and more.
          </p>
          <a
            href="https://click-and-eat-bhumi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Project
          </a>
        </motion.div>

        {/* Fitness Application Project */}
        <motion.div
          className="p-6 transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="mb-2 text-xl font-semibold">Fitness Application</h3>
          <p className="text-gray-400">
            A fitness application frontend built using React, TypeScript, and
            Tailwind CSS. Includes engaging animations and a responsive design
            for managing fitness journeys.
          </p>
          <a
            href="https://gym-de-shaukeen.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Project
          </a>
        </motion.div>

        {/* Mi Store UI Clone Project */}
        <motion.div
          className="p-6 transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="mb-2 text-xl font-semibold">Mi Store UI Clone</h3>
          <p className="text-gray-400">
            A frontend project replicating the Mi Store UI using React and
            Bootstrap. Features product listings and navigation similar to the
            original Mi Store.
          </p>
          <a
            href="https://mistorebhumi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
