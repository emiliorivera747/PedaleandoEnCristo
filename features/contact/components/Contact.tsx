"use client";
import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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

// Components
import ContactInfo from "@/features/contact/components/Contact";
import ContactForm from "@/features/contact/components/ContactForm";


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
            "flex flex-col sm:flex-row items-center gap-50 p-12 md:p-24 max-w-full w-full h-full py-[20%]",
          initial: "initial",
          whileInView: "animate",
        } as any)}
      >
        {/* <ContactInfo variants={variants} /> */}
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
