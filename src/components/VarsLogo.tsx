interface KTPLogoProps {
  className?: string;
}

export const KTPLogo = ({ className = "" }: KTPLogoProps) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Greek letters KTP styled logo - hidden on mobile */}
      <div className="hidden md:flex w-10 h-8 items-center justify-center bg-primary/10 rounded-sm">
        <span className="text-foreground font-bold text-lg leading-none">ΚΘΠ</span>
      </div>
      <span className="text-xl font-medium text-foreground">KTP VT</span>
    </div>
  );
};