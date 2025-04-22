'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+61) 433 720 478',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'jliou.work0126@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Waterloo, NSW 2017, Australia',
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' action=''>
              <h3 className='text-accent-default text-4xl'>Let's work together</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus temporibus
                eaque vitae maiores. Hic, molestias aut.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='First name'></Input>
                <Input type='lastname' placeholder='Last name'></Input>
                <Input type='email' placeholder='Email address'></Input>
                <Input type='phone' placeholder='Phone number'></Input>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='web'>Web development</SelectItem>
                    <SelectItem value='mobile'>Backend development</SelectItem>
                    <SelectItem value='design'>AI/LLM</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className='h-[200px]' placeholder='Type your message here.' />
              {/* btn */}
              <Button size='md' className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] text-accent-default xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center'>
                      <div className='text-[28px] '>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
