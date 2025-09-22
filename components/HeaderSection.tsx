import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CalendlyPopupButton from "@/features/calendly/CalendlyPopupButton";

// Components
import MissionStatement from "@/features/primary-landing-page/components/MissionStatement";
import Role from "@/features/primary-landing-page/components/Role";
import FullName from "@/features/primary-landing-page/components/FullName";

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

/**
 * Primary section
 *
 * @param {*} param0
 * @returns
 */
function HeaderSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold based on your requirement
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (videoRef.current?.paused) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen w-screen">
      <motion.div
        {...({
          initial: "initial",
          whileInView: "animate",
          variants: variants,
          className:
            "flex flex-row w-full h-full absolute sm:self-center sm:items-center sm:justify-center justify-end items-end self-end",
        } as any)}
      >
        <motion.div
          {...({
            className:
              "flex flex-col md:flex-col lg:flex-col w-full h-1/2 items-start justify-center sm:mx-16 mx-4 sm:gap-2 z-10 gap-1 bg-white-300",
          } as any)}
        >
          <FullName firstName={"Emilio"} lastName={"Rivera"} />
          <Role role={"Software Consultant"} />
          <MissionStatement />
          <CalendlyPopupButton />
        </motion.div>
      </motion.div>

      {/* VIDEO */}
      <div className="">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
      <video
        ref={videoRef}
        className={`object-cover w-full h-full`}
        src={
          "https://res.cloudinary.com/dcss55nem/video/upload/v1739681557/Portfolio_Video_t0y4tc.mp4"
        }
        loop
        preload="none"
        muted
        playsInline
      />
    </section>
  );
}

export default HeaderSection;
