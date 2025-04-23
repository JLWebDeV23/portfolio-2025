import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/JLWebDeV23' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className='w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-github hover:bg-accent-default hover:text-primary transition-all duration-500'
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
