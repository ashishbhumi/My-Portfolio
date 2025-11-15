import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen px-8 py-16 text-white bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="mb-8 text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* About Me Section */}
          <div>
            <p className="mb-4 text-lg text-gray-400">
              I am a frontend developer with a passion for building
              user-friendly, modern, and highly responsive web applications. My
              expertise lies in crafting visually appealing and performant
              interfaces using cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-400">
              With experience in React, TypeScript, Redux, and Tailwind CSS, I
              specialize in creating scalable, maintainable, and dynamic web
              applications. My focus is on delivering intuitive and efficient
              user experiences that delight users and solve real-world problems.
            </p>
          </div>
          {/* Skills Section */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Skills & Expertise
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                ⚡ Frontend Development with React, TypeScript, and JavaScript
              </li>
              <li>⚡ State Management using Redux Toolkit</li>
              <li>
                ⚡ Styling with Tailwind CSS and responsive design principles
              </li>
              <li>⚡ Animation and UI/UX design using Framer Motion</li>
              <li>⚡ API integration and dynamic data handling</li>
              <li>⚡ Building mobile-first, responsive web applications</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Hobbies/Passions Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white">More About Me</h3>
          <p className="mt-4 text-lg text-gray-400">
            When I'm not coding, I enjoy exploring new technologies, watching
            movies, and sharing knowledge with the community. I’m constantly
            looking for ways to improve my skills and stay updated with industry
            trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
