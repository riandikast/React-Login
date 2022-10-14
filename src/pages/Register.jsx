import React from "react";
import { useState, useEffect } from "react";
import FormInput2 from "../components/FormRegis";
import { motion } from "framer-motion";
function Register() {
  const transition = { duration: 0.5 , ease: [0.43, 0.13, 0.23, 0.96] };
  
  const pageVariants = {
    initial: { scale: 0.2, opacity: 100 },
    in: { scale: 1, opacity: 1, transition: { duration: 0.5, ...transition } },
    out: {
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <FormInput2
          FormProp="box-border border-github-border p-4 border-2 mt-12"
          ButtonProperties="text-white bg-github-light-blue  rounded-md  p-1 w-20 mt-12 ml-16  "
          ButtonText="Sign up"
        />
      </motion.div>
    </>
  );
}

export default Register;
