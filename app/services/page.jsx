'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
const MotionLink = motion(Link);

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
    href: '',
  },
  {
    num: '02',
    title: 'Backend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
    href: '',
  },
  {
    num: '03',
    title: 'AI / LLM',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
        >
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                num={service.num}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ num, title, description, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex-1 flex flex-col justify-center gap-6 group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* top */}
      <div className='w-full flex justify-between items-center group'>
        <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-accent-default transition-all duration-500 '>
          {num}
        </div>

        <MotionLink
          href={href}
          className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center'
          initial={{ backgroundColor: '#ffffff' }}
          animate={{
            backgroundColor: isHovered ? '#53ecaf' : '#ffffff',
            rotate: isHovered ? -45 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <BsArrowDownRight className='text-primary text-3xl group-hover:text-white group-hover:font-bold' />
        </MotionLink>
      </div>

      {/* Title with animated fill effect */}
      <div className='relative'>
        <h2 className='text-[42px] font-bold leading-none text-white'>{title}</h2>

        {/* Animated overlay text that fills with color */}
        <motion.h2
          className='text-[42px] font-bold leading-none text-accent-default absolute top-0 left-0'
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{
            clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* description */}
      <p>{description}</p>

      {/* border */}
      <div className='border-b border-white/20 w-full'></div>
    </div>
  );
};

export default Services;
