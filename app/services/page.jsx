'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
const MotionLink = motion.create(Link);

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      "I’m a frontend-savvy full-stack developer with a strong focus on building clean, modern, and responsive web applications using React, Vue, Tailwind, and TypeScript. From intuitive Chrome extensions to dynamic dashboards and data-driven UIs, I’ve led the design and implementation of multiple production-grade web apps that prioritize performance, scalability, and user experience. My projects often combine seamless frontend interactivity with robust backend support, enabling real-time features, audio playback, and efficient data workflows. Whether it's a marketing site, internal tool, or a browser-based productivity extension, I deliver polished, user-friendly interfaces with a solid architectural foundation.",

    href: '',
  },
  {
    num: '02',
    title: 'Backend Development',
    description:
      "As a backend developer, I specialize in Node.js, Express.js, and cloud-native services like AWS and DynamoDB to create scalable APIs, real-time pipelines, and system integrations. I've designed and migrated backend systems that improved integration efficiency by 20% and built file upload pipelines that reduced latency by 35%. With hands-on experience using PostgreSQL, TimescaleDB, and microservice architecture, I’m comfortable designing backend logic that handles real-world demands, from document processing to authentication using JWT. I build backends that not only work — they scale, adapt, and last.",
    href: '',
  },
  {
    num: '03',
    title: 'AI / LLM',
    description:
      'I bring real-world experience developing AI systems leveraging LLMs, embeddings, RAG architecture, and vector databases like Qdrant. I’ve built multi-model evaluation tools using OpenAI, Claude, Mistral, and Llama, and designed NLP interfaces that generate structured JSON outputs for downstream decision-making. From creating tokenizer visualizations to integrating function calling and system prompts, I’m equipped to build AI features that go beyond chat — grounding output with real data, enhancing UX with thoughtful prompt engineering, and integrating with full-stack applications. I make AI practical, insightful, and ready for production.',
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
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.1, ease: 'easeIn' } }}
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
