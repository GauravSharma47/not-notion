import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex w-full items-center gap-x-2">
      <Image
        src={"/logo-light.svg"}
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.svg"}
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Not-Notion</p>
    </div>
  );
};
