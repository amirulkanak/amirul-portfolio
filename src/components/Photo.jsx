'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="size-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="size-[18.625rem] xl:size-[31.125rem] mix-blend-lighten absolute">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Amirul Kanak Photo"
            className="object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="size-[18.75rem] xl:size-[31.625rem]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0370A9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 20', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
