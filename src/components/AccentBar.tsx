interface AccentBarProps {
  color: 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AccentBar = ({ color, size = 'md', className = '' }: AccentBarProps) => {
  const colorClass = color === 'blue' ? 'bg-[#2B4D89]' : 'bg-[#3CB371]';
  
  const sizeClasses = {
    sm: 'h-0.5 w-8',
    md: 'h-1 w-12',
    lg: 'h-1.5 w-16'
  };

  return (
    <div 
      className={`${colorClass} ${sizeClasses[size]} ${className}`}
    />
  );
};
