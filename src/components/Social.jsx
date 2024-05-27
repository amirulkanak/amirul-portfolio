import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTelegram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, link: 'https://github.com/amirulkanak' },
  {
    icon: <FaLinkedinIn />,
    link: 'https://bd.linkedin.com/in/amirulalamkanak',
  },
  { icon: <FaFacebook />, link: 'https://facebook.com/amirulalamkanak' },
  { icon: <FaTelegram />, link: 'https://t.me/amirulkanak' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.link} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
