interface VarsLogoProps {
  className?: string;
}

export const VarsLogo = ({ className = "" }: VarsLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric V-shaped logo to match vars.gg */}
      <div className="w-7 h-7 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white">
          <path d="M8 8L14 20L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-xl font-medium text-white">vars.gg</span>
    </div>
  );
};