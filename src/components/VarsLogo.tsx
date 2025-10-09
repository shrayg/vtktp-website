interface KTPLogoProps {
  className?: string;
}

export const KTPLogo = ({ className = "" }: KTPLogoProps) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <span className="text-xl font-medium text-foreground">KTP VT</span>
    </div>
  );
};