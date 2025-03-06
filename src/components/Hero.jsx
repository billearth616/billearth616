import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Hero() {
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

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <motion.section
      id="home"
      className="min-h-screen pt-20 bg-primary flex items-center px-4 md:px-8 lg:px-24 text-light relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[3fr,2fr] gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.p 
              variants={itemVariants} 
              className="text-secondary text-lg md:text-xl font-medium"
            >
              Hi, my name is
            </motion.p>

            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-bold text-light"
            >
              Bill Deyegbe.
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold text-light/70"
            >
              I build things for the web.
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-light/60 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              I'm a software engineer based in Accra, specializing in building exceptional 
              digital experiences. Currently, I'm focused on building accessible, 
              human-centered products.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-secondary text-secondary rounded-lg font-medium hover:bg-secondary/10 transition-colors duration-300"
              >
                View Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-6 pt-8"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/60 hover:text-secondary text-2xl transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Decorative Element */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block"
          >
            {/* Abstract Shapes */}
            <div className="relative w-full h-[600px] perspective-1000">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#64ffda]/5 blur-[120px]"></div>
              
              {/* Main floating card */}
              <motion.div
                animate={{
                  rotateX: [0, 10, 0],
                  rotateY: [0, 15, 0],
                  rotateZ: [0, 5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-[60px] bg-gradient-to-br from-[#64ffda]/20 via-[#40e6c1]/15 to-transparent shadow-[0_0_50px_rgba(100,255,218,0.1)] backdrop-blur-sm border border-[#64ffda]/10"
              />
              
              {/* Secondary floating element */}
              <motion.div
                animate={{
                  rotateX: [0, -15, 0],
                  rotateY: [0, -10, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-[40px] bg-gradient-to-tl from-[#64ffda]/30 via-[#64ffda]/10 to-transparent shadow-[0_0_30px_rgba(100,255,218,0.05)] backdrop-blur-md"
              />

              {/* Decorative element */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-[#64ffda]/20 backdrop-blur-sm"
              >
                <div className="absolute inset-4 rounded-full border border-[#64ffda]/10"></div>
                <div className="absolute inset-8 rounded-full border border-[#64ffda]/5"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
  