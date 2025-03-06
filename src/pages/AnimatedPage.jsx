import {motion} from 'framer-motion'
import PropTypes from 'prop-types';


const AnimatedPage = ({children}) => {

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.4
            }
        }
    };

  return (
    <motion.div
      initial={pageVariants.initial}
      animate={pageVariants.animate}
      exit={pageVariants.exit}
    >
      {children}
    </motion.div>
  )
  
}

AnimatedPage.propTypes = {
    children: PropTypes.node.isRequired,
};  

export default AnimatedPage