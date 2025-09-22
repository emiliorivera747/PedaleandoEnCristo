"use client";
import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

//Components
import PrimaryLandingPageSection from "@/features/primary-landing-page/components/PrimaryLandingPageSection";
import Page from "@/components/Page";

//Sections
import Contact from "@/components/Contact";


// Data
import { navBarData } from "@/utils/data/navbar/navbarData";
import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/footers/Footer";
/**
 *  Main App component that wraps around all pages.
 *
 * @param {*} param0
 * @returns
 */
export default function App() {
  return (
    <>
      <Navbar menuItems={navBarData} />
      <AnimatePresence mode="wait">
        <motion.div {...({ className: "h-auto" } as any)}>
          <Page>
            <PrimaryLandingPageSection
              videoUrl={
                "https://res.cloudinary.com/dcss55nem/video/upload/v1739681557/Portfolio_Video_t0y4tc.mp4"
              }
            />
            <Contact />
            <Footer />
          </Page>
          <motion.div
            {...({
              className:
                "absolute top-0 left-0 w-screen h-screen bg-black z-50",
              initial: { scaleY: 0 },
              animate: { scaleY: 0 },
              exit: { scaleY: 1 },
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
            } as any)}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
