import React, { useState } from 'react';
import { motion,AnimatePresence } from "framer-motion"
const Card = ({ children, reverseCard }) => {




    return (
        // <div className={reverse? "card reverse":"card"}>
        //     {children}

        // </div>


        // or



        <AnimatePresence>
          
        <motion.div initial={{ opacity: 0 }} 
        animate={{ opacity: 1 , duration: 0.5}}
         exit={{opacity:0}} 
         transition={{ ease: "easeOut", duration: 0.5 }}>   
    <div className={`card ${reverseCard && "reverse"}`}>
        {children}
    </div>
    </motion.div>
    </AnimatePresence>
         

       
    );
};

export default Card;