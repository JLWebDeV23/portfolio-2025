import { animate, AnimatePresence, motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each reporesenting a step of the stairs.
     
     Each step will have the same animation defined by the stairsAnimation object.
     The delay for each div is calculated dynamically based on its reversed index,
     creating a staggered effet with  decreasing delay for each subsequent step.
    
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initiol='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.18,
              delay: reverseIndex(index) * 0.1,
              ease: 'easeInOut',
            }}
            className='h-full w-full bg-white relative'
          />
        );
      })}
    </>
  );
};

export default Stairs;
