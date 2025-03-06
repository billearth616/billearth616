import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-screen pt-24 bg-primary flex flex-col justify-center items-start px-52 text-light"
    >
      <motion.h2 variants={itemVariants} className="text-7xl font-semibold text-light mb-6">
        About Me.
      </motion.h2>
      <motion.p variants={itemVariants} className=" text-light/60 mb-8 text-xl">
        {`I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.`} <br /><br />

        {`Currently, I'm a Senior Front-End Engineer at`} <span className="text-light font-semibold">Klaviyo</span> {`, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.`} <br /><br />

        {`In the past, I've had the opportunity to develop software across a variety of settings — from`} <span className="text-light font-semibold"> advertising agencies </span>{`and`} <span className="text-light font-semibold">large corporations </span>{`to start-ups and`} <span className="text-light font-semibold">small digital product studios</span>{`. Additionally, I also released a`} <span className="text-light font-bold">comprehensive video course</span> {` a few years ago, guiding learners through building a web app with the Spotify API.`} <br /><br />

        {`In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for `} <span className="text-light font-semibold">Korok seeds.</span><br /><br />
      </motion.p>
    </motion.section>
  )
}

export default About