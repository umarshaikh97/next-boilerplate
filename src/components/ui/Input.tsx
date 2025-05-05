/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isValid?: boolean;
  error?: string;
  inputClassName?: string;
}

export default function Input(props: InputProps) {
  const {
    className = '',
    inputClassName = '',
    startIcon,
    endIcon,
    isValid,
    error,
    ...inputProps
  } = props ?? {};
  const hasStartIcon = !!startIcon;
  const hasEndIcon = !!endIcon;

  return (
    <div className={cn('relative', className)}>
      {startIcon && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          {startIcon}
        </div>
      )}
      <input
        className={cn(
          'block w-full rounded-lg font-medium border border-black-950 p-4',
          hasStartIcon ? 'ps-14' : 'ps-4',
          hasEndIcon ? 'pe-14' : 'pe-4',
          'text-black-900 placeholder:text-black-700 focus-visible:outline-0',
          inputClassName
        )}
        {...inputProps}
      />

      {endIcon && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-5">
          {endIcon}
        </div>
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
