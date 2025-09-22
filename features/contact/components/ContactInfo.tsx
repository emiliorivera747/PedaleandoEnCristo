import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const ContactInfo = ({ variants }: any) => {
  return (
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
        <h1 className="text-zinc-800 font-bold">Correo Electrónico</h1>
        <Link
          href="mailto:pedaliandoencristo@gmail.com"
          className="text-zinc-800 text-sm"
          aria-label="Email"
        >
          pedaliandoencristo@gmail.com
        </Link>
      </motion.div>
      <motion.div {...({ variants: variants, className: "w-full" } as any)}>
        <h1 className="text-zinc-800 font-bold ">Teléfono</h1>
        <span className="text-zinc-800 text-sm">+1 (408) 772-6162</span>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
