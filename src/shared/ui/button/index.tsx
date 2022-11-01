//import modules
import clsx from 'clsx'

interface ButtonProps {
  label: string
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button = ({
  label,
  disabled,
  className,
  onClick,
}: ButtonProps) => (
  <button
    className={clsx(
      'py-1 px-6 rounded-lg text-lg border-2 border-stone-300 cursor-pointer',
      className
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
)
