'use client';
import './ui/css/borderAnimation/index.css';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className='profile-photo relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] ms-8'>
      <div className='profile-photo active relative w-full h-full rounded-full'>
        {/* Animation overlay */}
        <span className='overlay absolute rounded-full inset-0 z-10 bg-background m-1'></span>

        {/* Blurred layer behind */}
        <div className='absolute inset-0 z-15'>
          <div className='w-full h-full scale-[1] blur-xl'>
            <Image
              src='/assets/profile_photo.png'
              fill
              alt='Blurry Edge Layer'
              className='object-contain rounded-full'
            />
          </div>
        </div>

        {/* Main image layer */}
        <motion.div className='relative w-full h-full z-20'>
          <Image
            src='/assets/profile_photo.png'
            priority
            quality={100}
            fill
            alt='Profile Photo'
            className='object-contain rounded-full m-2'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
