'use client';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

function Button({
  children,
  onClick = () => {},
  type = 'button',
  className = '',
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-26 flex items-center justify-center px-4 py-2 text-sm text-blue-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
