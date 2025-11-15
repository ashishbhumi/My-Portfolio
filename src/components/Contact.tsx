import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen text-white bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-md p-8 mx-auto space-y-6 text-center bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-teal-400">Get In Touch</h2>
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:ashish10052002@gmail.com"
              className="underline hover:text-teal-400"
            >
              ashish10052002@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+918340677355"
              className="underline hover:text-teal-400"
            >
              +91-8340677355
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/ashishbhumi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-400"
            >
              github.com/ashishbhumi
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/ashish-singh-476640217/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-400"
            >
              linkedin.com/in/ashish-singh
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
