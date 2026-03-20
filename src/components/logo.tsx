import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoImage from "../../public/assets/logoo.png"; // Update with your actual logo path

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"} title="Home" >
      <Image
        src={logoImage}
        alt="Scof Services"
        width={50} 
        height={50} 
        className={clsx("transition-opacity duration-300 hover:opacity-80", className)}
        priority
      />
    </Link>
  );
}
