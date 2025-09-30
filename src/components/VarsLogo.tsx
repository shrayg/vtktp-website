interface KTPLogoProps {
  className?: string;
}

export const KTPLogo = ({ className = "" }: KTPLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Greek letters KTP styled logo */}
      <div className="w-8 h-8 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
          <text x="16" y="20" textAnchor="middle" className="text-white font-bold text-lg fill-current">ΚΘΠ</text>
        </svg>
      </div>
      <span className="text-xl font-medium text-white">KTP VT</span>
    </div>
  );
};