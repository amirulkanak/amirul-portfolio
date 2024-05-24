import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{' '}
              <span className="text-accent">Amirul Kanak</span>
            </h1>
            <p className="max-w-[31.25rem] mb-9 text-secondary/80">
              I am a web developer based in Bangladesh. I have rich experience
              in digital world with proficient knowledge in various web
              programming languages and technologies.
            </p>
            {/* Button and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social></Social>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
