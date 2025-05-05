import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-70 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-green-700 text-white hover:bg-green-800',
      },
      size: {
        medium: 'py-3 px-6 ',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  buttonClassName?: string;
  asChild?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    className = '',
    buttonClassName = '',
    startIcon,
    endIcon,
    variant,
    size,
    fullWidth,
    children,
    disabled,
    asChild = false,
    ...buttonProps
  } = props ?? {};

  const Comp = asChild ? Slot : 'button';
  const hasStartIcon = !!startIcon;
  const hasEndIcon = !!endIcon;

  return (
    <div className={`relative ${className}`}>
      <Comp
        type="button"
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          buttonClassName
        )}
        disabled={disabled}
        {...buttonProps}
      >
        {hasStartIcon && <span className="inline-block me-2">{startIcon}</span>}
        <span>{children}</span>
        {hasEndIcon && <span className="inline-block ms-2">{endIcon}</span>}
      </Comp>
    </div>
  );
}
