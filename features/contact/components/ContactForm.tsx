import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null);
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
          setError(null);
        },
        (error) => {
          setError("Failed to send email. Please try again later.");
          setSuccess(false);
        }
      );
  };
  return (
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
        {error && (
          <div className="bg-red-100 rounded-[12px] flex items-center justify-center py-10 border-red-600 border">
            <p className="text-red-600 text-md">{error}</p>
          </div>
        )}
        {success && "Success"}
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
