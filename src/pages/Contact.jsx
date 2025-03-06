import { motion } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

const Contact = () => {
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
            Get In Touch
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-light/80 text-lg mb-8">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-4 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-300"
            >
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;