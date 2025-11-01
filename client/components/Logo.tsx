import { useState } from "react";

interface LogoProps {
  variant?: "header" | "footer" | "large";
  showText?: boolean;
  className?: string;
}

export default function Logo({
  variant = "header",
  showText = true,
  className = ""
}: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getLogoClass = () => {
    switch (variant) {
      case "header":
        return "header-logo";
      case "footer":
        return "footer-logo";
      case "large":
        return "h-16 w-auto object-contain max-w-48";
      default:
        return "header-logo";
    }
  };

  const getTextClass = () => {
    switch (variant) {
      case "header":
        return "hidden sm:block leading-tight";
      case "footer":
        return "font-bold text-sm md:text-base lg:text-lg text-primary-foreground";
      case "large":
        return "font-bold text-lg md:text-xl lg:text-2xl text-primary";
      default:
        return "font-bold text-sm md:text-lg text-primary";
    }
  };

  const getFallbackClass = () => {
    switch (variant) {
      case "header":
        return "w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg";
      case "footer":
        return "w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm";
      case "large":
        return "w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-2xl";
      default:
        return "w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg";
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imageError ? (
        <>
          {!imageLoaded && (
            <div className={`${getLogoClass()} logo-loading`} />
          )}
          <img
            src="/logo.jpg"
            alt="R.L MINERALS MINING Logo"
            className={`${getLogoClass()} ${!imageLoaded ? 'opacity-0 absolute' : 'opacity-100'} transition-opacity duration-300`}
            loading={variant === "header" ? "eager" : "lazy"}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </>
      ) : (
        <div className={getFallbackClass()}>
          M
        </div>
      )}

      {showText && variant === "header" && (
        <div className={getTextClass()}>
          {/* Large screens: single line */}
          <span className="hidden xl:block font-bold text-base xl:text-lg 2xl:text-xl whitespace-nowrap text-primary tracking-tight">
            R.L MINERALS MINING
          </span>
          {/* Mobile and medium screens: two lines */}
          <div className="block xl:hidden text-sm sm:text-base leading-tight font-bold tracking-tight">
            <div className="text-primary">R.L MINERALS</div>
            <div className="text-primary">MINING</div>
          </div>
        </div>
      )}

      {showText && variant !== "header" && (
        <span className={getTextClass()}>
          R.L MINERALS MINING
        </span>
      )}
    </div>
  );
}