import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

interface SocialItemsProp {
  to: string;
  image_url: string;
  label?: string;
}

const SocialItem = ({ to, image_url, label }: SocialItemsProp) => {
  return (
    <Link
      href={to}
      className="border rounded-[12px] p-6 border-primary-200 hover:bg-primary-200  w-[6rem] h-[6rem] flex items-center justify-center"
    >
      <CldImage
        className=""
        alt={label || ""}
        src={image_url}
        width={50}
        height={50}
      />
    </Link>
  );
};

export default SocialItem;
