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

interface ContactProps {
  textEnter?: () => void;
  textLeave?: () => void;
}

/**
 * Displays the contact section where users can reach out via email or phone.
 *
 *
 * @param {*} param0
 * @returns
 */
const Contact: React.FC<ContactProps> = ({ textEnter, textLeave }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5ckpya",
        "template_dy3465k",
        form.current as HTMLFormElement,
        "KREG4OVfIOrUuqIh3"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

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
            <h1
              className="text-zinc-800 font-bold"
            >
              Correo Electrónico
            </h1>
            <Link
              href="mailto:pedaliandoencristo@gmail.com"
              className="text-zinc-800 text-sm"
              aria-label="Email"
            >
              pedaliandoencristo@gmail.com
            </Link>
          </motion.div>
          <motion.div {...({ variants: variants, className: "w-full" } as any)}>
            <h1
              className="text-zinc-800 font-bold "
            >
              Teléfono
            </h1>
            <span
              className="text-zinc-800 text-sm"
            >
              +1 (408) 772-6162
            </span>
          </motion.div>
          <motion.div
            {...({
              variants: variants,
              className: "w-full h-full pt-10",
            } as any)}
          >
            <div className="flex flex-row gap-6 items-center">
              <Link
                href="https://github.com/emiliorivera747"
                className="border rounded-[12px] p-6 border-primary-200 hover:bg-primary-200"
                aria-label="Emilio's GitHub"
              >
                {" "}
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook icon</title>
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/in/emilio-rivera-3a1912167"
                className="border rounded-[12px] p-6 border-primary-200 hover:bg-primary-200"
                aria-label="Emilio's LinkedIn"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  style={{ color: "#0077b5" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@emiliorivera2270"
                className="border rounded-[12px] p-6 border-primary-200 hover:bg-primary-200"
                aria-label="Emilio's YouTube"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  style={{ color: "#ff0000" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div {...({ className: "flex-1 w-full h-full" } as any)}>
          <motion.form
            {...({
              ref: form,
              onSubmit: sendEmail,
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { delay: 1, duration: 1 },
              className: "flex flex-col gap-4 pt-6 w-full  ",
            } as any)}
          >
            <input
              type="text"
              name="from_name"
              className="bg-transparent border-primary-400 px-4 py-4 text-primary-800 rounded-[12px] border "
              placeholder="Name"
            />
            <input
              name="email"
              type="email"
              className="bg-transparent border-primary-400 px-4 py-4 text-primary-800 rounded-[12px] border "
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-primary-400 px-4 py-4 text-primary-800 rounded-[12px] border "
              name="message"
              id=""
              cols={20}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button className="text-zinc-800 bg-white hover:bg-zinc-800 hover:text-white border-2 border-zinc-800 p-3 rounded-md">
              Submit
            </button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
