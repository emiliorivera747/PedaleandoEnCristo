import React from "react";
import Link from "next/link";

const Email = () => {
  return (
    <>
      {" "}
      <h1 className="text-zinc-800 font-bold">Correo Electrónico</h1>
      <Link
        href="mailto:pedaliandoencristo@gmail.com"
        className="text-zinc-800 text-sm"
        aria-label="Email"
      >
        pedaliandoencristo@gmail.com
      </Link>
    </>
  );
};

export default Email;
