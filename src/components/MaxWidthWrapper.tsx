import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = (prop :{
    className?: string
    children: ReactNode
}) => {
    return <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", 
        prop.className)}>{prop.children}</div>
};

export default MaxWidthWrapper;
