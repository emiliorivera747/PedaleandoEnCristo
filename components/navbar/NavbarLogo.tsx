"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

import { NavbarLogoProp } from "@/types/navbar";

/**
 * Stores the logo for the navbae
 *
 * @param logoTextColor - text color
 * @param menuTextColor - the menu text color
 * @returns logo
 */
const NavbarLogo = ({ logoTextColor, menuTextColor }: NavbarLogoProp) => {
  return (
    <div className="z-30 justify-self-start">
      <Link
        href="/"
        className={`flex flex-row tracking-widest hover:text-primary-500 hover:backdrop-blur-md rounded-lg p-[0.8rem] ${logoTextColor} ${menuTextColor} font-semibold items-center justify-center`}
        aria-label="Logo"
      >
        <CldImage
          src="https://res.cloudinary.com/dcss55nem/image/upload/v1758503198/Remove_background_project_d6xtfj.png"
          fetchPriority="high"
          height={40}
          width={40}
          className="pr-1 self-end"
          alt="logo"
        />{" "}
        <h1 className="font-bold tracking-widest uppercase">
          {"Pedaleando En Cristo"}
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
