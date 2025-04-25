import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Stats from '@/components/Stats';
import Services from './services/page';
import Resume from './resume/page';
import Work from './work/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span>Full-Stack Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br /> <span className='text-accent-default'>Joey Liou</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences, am passionate about the fields of
              LLMs and AI, and proficient in various programming languages and technologies
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase xl:flex items-center gap-2'
                // onClick={() => window.open('/assets/joeyliou.pdf', '_blank')}
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyles='flex gap-6' iconStyles='' />
              </div>
            </div>
          </div>
          {/* download cv and social*/}

          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Work />
      <Services />
      <Resume />
      <Contact />
    </section>
  );
}
