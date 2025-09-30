interface KTPLogoProps {
  className?: string;
}

export const KTPLogo = ({ className = "" }: KTPLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Greek letters KTP styled logo - fixed clipping */}
      <div className="w-10 h-8 flex items-center justify-center bg-white/10 rounded-sm">
        <span className="text-white font-bold text-lg leading-none">ΚΘΠ</span>
      </div>
      <span className="text-xl font-medium text-white">KTP VT</span>
    </div>
  );
};