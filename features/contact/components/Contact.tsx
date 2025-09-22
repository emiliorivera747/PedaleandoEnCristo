"use client";
import React from "react";
import { motion } from "framer-motion";
import Email from "@/features/contact/components/Email";
import Phone from "@/features/contact/components/Phone";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const SocialItems = [
  {
    href: "#",
    image_url:
      "/https://res.cloudinary.com/dcss55nem/image/upload/v1758511510/104498_facebook_icon_uvkot1.png",
    alt: "",
  },
  { href: "#", image_url: "/", alt: "" },
  { href: "#", image_url: "/", alt: "" },
];

// Components
import ContactForm from "@/features/contact/components/ContactForm";
import SocialItem from "@/features/contact/components/SocialItem";

/**
 * Displays the contact section where users can reach out via email or phone.
 *
 *
 * @param {*} param0
 * @returns
 */
const Contact = () => {
  return (
    <section className="min-h-screen w-screen bg-white h-auto">
      <motion.div
        {...({
          className:
            "flex flex-col sm:flex-row gap-50 p-12 md:p-24 max-w-full w-full h-full py-[20%]",
          initial: "initial",
          whileInView: "animate",
        } as any)}
      >
        <motion.div
          {...({
            variants: variants,
            className: "flex-1 flex flex-col gap-4 h-full",
          } as any)}
        >
          <motion.h1
            {...({
              variants: variants,
              className:
                "text-primary-1000 text-5xl md:text-6xl font-bold leading-none  w-full",
            } as any)}
          >
            {"Contacto"}
          </motion.h1>
          <motion.div {...({ variants: variants, className: "w-full" } as any)}>
            <Email />
          </motion.div>
          <motion.div {...({ variants: variants, className: "w-full" } as any)}>
            <Phone />
          </motion.div>
          <motion.div {...{ className: "flex flex-row gap-4 pt-10" }}>
            {SocialItems.map(({ href, image_url, alt }, index) => {
              return (
                <SocialItem
                  key={image_url + index}
                  to={"#"}
                  image_url={
                    "https://res.cloudinary.com/dcss55nem/image/upload/v1758512288/communication_hkbfdo.png"
                  }
                />
              );
            })}
          </motion.div>
        </motion.div>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
