'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'We build web applications that are fast, secure, and scalable.',
    link: '/web-development',
  },
  {
    num: '02',
    title: 'Web Design',
    description:
      'We design websites that are beautiful and user-friendly and help businesses grow.',
    link: '/web-design',
  },
  {
    num: '03',
    title: 'SEO',
    description:
      'We help businesses rank higher on search engines and get more traffic.',
    link: '/seo',
  },
  {
    num: '04',
    title: 'Logo Design',
    description:
      'We create unique logos that help businesses stand out from the competition.',
    link: '/logo-design',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[3.75rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group">
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link
                  href={service.link}
                  className="size-[4.375rem] rounded-full bg-secondary/75 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* Title */}
              <h2 className="h2 font-bold leading-none text-secondary group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-secondary/60">{service.description}</p>
              {/* Border */}
              <div className="border-b border-secondary/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
