import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

interface SocialItemsProp {
  href: string;
  image_url: string;
  alt: string;
}

const SocialItem = ({ href, image_url, alt }: SocialItemsProp) => {
  return (
    <Link href={href}>
      <CldImage alt={alt} src={image_url} width={100} height={100} />
    </Link>
  );
};

export default SocialItem;
