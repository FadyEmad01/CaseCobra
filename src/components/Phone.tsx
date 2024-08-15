import { cn } from "@/lib/utils";
import { MODELS } from "@/validators/option-validator";
import { HtmlHTMLAttributes } from "react";

interface PhoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}



function Phone({ imgSrc, className, dark = false, ...props}: PhoneProps) {
  
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden ",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none min-w-full"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-cove min-w-full min-h-full"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
}

export default Phone;
