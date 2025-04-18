'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, Faty } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = [
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Joey Liou',
      },
      {
        fieldName: 'Phone',
        fieldValue: '(+61) 433 720 478',
      },
      {
        fieldName: 'Experience',
        fieldValue: '1+ Year',
      },
      {
        fieldName: 'Email',
        fieldValue: 'jliou.work0126@gmail.com',
      },
      {
        fieldName: 'Freelance',
        fieldValue: 'Available',
      },
      {
        fieldName: 'Language',
        fieldValue: 'English | Chinese | Japanese',
      },
    ],
  },
];

const epxerience = {
  icon: '/asssets/resume/cap.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
  items: [
    {
      company: 'Knowz Pty Ltd',
      position: 'Junior Fullstack AI Engineer',
      date: 'Feb 2024 - Apr 2024',
    },
    {
      company: 'Knowz Pty Ltd',
      position: 'Graduate Fullstack AI Engineer',
      date: 'Aug 2023 - Jan 2024',
    },
    {
      company: 'Knowz Pty Ltd',
      position: 'AI Frontend Engineer Intern',
      date: 'Apr 2023 - Jul 2023',
    },
  ],
};

const education = {
  icon: '/asssets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
  items: [
    {
      institution: 'Queensland University of Technology',
      degree: 'Bachelor of Information Technology',
      date: '2021 - 2022',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, obcaecati architecto! Id facilis numquam temporibus quidem illum.',
  skilllists: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'javascripts',
    },
    {
      icon: <BiLogoTypescript />,
      name: 'Typescript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
    {
      icon: <SiRedux />,
      name: 'redux',
    },
    {
      icon: <SiStyledcomponents />,
      name: 'styled-components',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaPython />,
      name: 'python',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px] '>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{epxerience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {epxerience.description}
                </p>
                <ScrollArea className='max-h-[400px]'>
                  <ul className='flex flex-col lg:grid-cols-1 gap-[30px]'>
                    {epxerience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#322329] p-6 px-10 rounded-xl flex flex-col justify-center lg-items-start gap-1'
                        >
                          <span className='text-accent-default'>{item.date}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] round-full bg-accent-default'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full'>
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value='about' className='w-full'>
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
