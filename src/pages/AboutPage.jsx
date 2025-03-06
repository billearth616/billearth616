import { motion } from "framer-motion";
import AnimatedPage from "./AnimatedPage";
import { FiCode, FiDatabase, FiLayout } from "react-icons/fi";
import profileImage from "../assets/images/pp.jpg";

function About() {
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

  const skills = [
    {
      category: "Frontend Development",
      icon: <FiLayout className="text-3xl" />,
      technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Next.js"],
    },
    {
      category: "Backend Development",
      icon: <FiDatabase className="text-3xl" />,
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      category: "Tools & Others",
      icon: <FiCode className="text-3xl" />,
      technologies: ["Git", "GitHub", "VS Code", "Figma", "Docker", "AWS", "Firebase"],
    },
  ];

  return (
    <AnimatedPage>
      <section className="min-h-screen bg-primary text-light px-4 md:px-8 lg:px-16 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto"
        >
          {/* About Me Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-gray-200 text-lg leading-relaxed">
                  Hello! I'm Bill, a passionate software engineer based in Accra. I enjoy creating
                  things that live on the internet, whether that be websites, applications, or
                  anything in between. My goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  I graduated from [Your University] with a degree in Computer Science, and since then,
                  I've had the privilege of working at [companies/projects]. My main focus these days
                  is building accessible, inclusive products and digital experiences.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  When I'm not at the computer, I'm usually [your hobbies/interests]. I'm always
                  interested in new opportunities and challenges.
                </p>
              </div>

              {/* Profile Image */}
              <motion.div 
                variants={itemVariants}
                className="relative group w-full max-w-sm mx-auto perspective-1000"
              >
                {/* Background Cards */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 aspect-[3/4] h-80 transform transition-all duration-500 translate-x-8 translate-y-4 group-hover:translate-y-0 group-hover:rotate-6 bg-secondary/20 rounded-lg"></div>
                  <div className="absolute inset-0 aspect-[3/4] h-80 transform transition-all duration-500 -translate-x-8 translate-y-4 group-hover:translate-y-0 group-hover:-rotate-6 bg-secondary/20 rounded-lg"></div>
                </div>
                
                {/* Main Image Card */}
                <div 
                  className="relative z-10 rounded-lg overflow-hidden aspect-[3/4] h-80 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover object-center rounded-lg transition-all duration-500"
                  />
                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 border-2 border-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
                  {/* Reduced Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-1 transition-all duration-500 bg-secondary blur-md"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-primary-light p-6 rounded-xl border border-secondary hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 text-secondary">
                    {skillSet.icon}
                    <h4 className="text-xl font-semibold">{skillSet.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm text-secondary rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
}

export default About; 