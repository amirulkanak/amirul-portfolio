import Link from 'next/link';
// Shadcn ui components
import { Button } from './ui/button';
// Desktop Navigation component
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-bold">
            <span className="text-[#ED772F]">K</span>
            <span className="text-[#0370A9]">o</span>
            <span className="text-[#ED772F]">der</span>
            <span className="font-thin text-[#DFDDDB]">hub</span>
            <span className="!text-[#0370A9]/80">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation and Hire me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
