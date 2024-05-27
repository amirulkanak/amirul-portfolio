'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 2,
    text: 'Years of Experience',
  },
  {
    num: 10,
    text: 'Projects Completed',
  },
  {
    num: 80,
    text: 'Happy Clients',
  },
  {
    num: 200,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extra-bold"
              />
              <span
                className={`${
                  stat.text.length < 15 ? 'max-w-[6.25rem]' : 'max-w-[9.375rem]'
                } leading-snug text-secondary/80`}>
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
