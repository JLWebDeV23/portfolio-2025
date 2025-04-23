'use client';

import WorkSliderButton from '@/components/ui/WorkSliderButton';
import { motion, time } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    categroy: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
  {
    num: '02',
    categroy: 'frontend',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
  {
    num: '03',
    categroy: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
  {
    num: '04',
    categroy: 'frontend',
    title: 'project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
  {
    num: '05',
    categroy: 'frontend',
    title: 'project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
  {
    num: '01',
    categroy: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png', //TODO: add image
    live: '',
    github: '',
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2, duration: 0.1, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12: xl:px-20 sm:px-5'
    >
      <div className='container max-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.categroy}
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4i'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent-default'>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20' />
              {/* buttons */}
              <div className='flex gap-4'>
                {/* live projects button */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-default' />
                      </TooltipTrigger>
                      <TooltipContent>Live projects</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github projects button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent-default' />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-md'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          alt='project image'
                          fill
                          className='object-cover rounded-md'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderButton
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='text-white/80 hover:text-accent-hover text-primary text-[40px] lg:text-[22px] sm:rounded-md w-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
