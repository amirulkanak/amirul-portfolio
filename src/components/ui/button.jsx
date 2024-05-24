import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full whitespace-nowrap transition-colors text-base font-semibold ring-offset-white',
  {
    variants: {
      variant: {
        default: 'bg-accent text-secondary hover:bg-accent-hover',
        primary: 'bg-primary text-white',
        outline:
          'border border-accent bg-transparent text-accent hover:bg-accent hover:text-secondary',
      },
      size: {
        default: 'h-11 px-6',
        md: 'h-12 px-6',
        lg: 'h-14 px-8 text-sm uppercase tracking-widest',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
