import { twMerge } from "tailwind-merge";

type ModalActionProps = {
  color?: 'error' | 'success' | 'warning' | 'info' | 'none'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Colors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
  none: 'bg-transparent'
};

export const ModalAction = ({
  onClick,
  children,
  className,
  color = 'none',
  ...rest
}: ModalActionProps) => {
  const colorButton = Colors[color]

  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge(
        "rounded-md px-4 py-1 text-white",
        className,
        colorButton
      )}
    >
      {children}
    </button>
  )
}