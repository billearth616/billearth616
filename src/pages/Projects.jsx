import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import AnimatedPage from "./AnimatedPage";
import portfolioImage from "../assets/images/pImage.png";



function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and a clean user interface.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourwebsite.com",
      image: portfolioImage,
    },
    // Add more projects here
  ];

  return (
    <AnimatedPage>
      <section className="min-h-screen bg-primary text-light px-4 md:px-8 lg:px-24 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-primary-light rounded-xl overflow-hidden border border-light/10 hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(100,255,218,0.1)]"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">
                    {project.title}
                  </h3>
                  <p className="text-light/80 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light/80 hover:text-secondary transition-colors duration-300"
                    >
                      <FiGithub className="text-xl" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-light/80 hover:text-secondary transition-colors duration-300"
                    >
                      <FiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
}

export default Projects;
