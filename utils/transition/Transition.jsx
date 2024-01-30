"use client"

import { AnimatePresence, motion } from "framer-motion"
import { transitionVariantPage } from "../motionTransitions"

export const Transition = () => {
  return (
    <>
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-38 bg-[#2e2257]"
                variants={transitionVariantPage}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                >
                    
                </motion.div>
                <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#1a0a29] opacity-50"
                variants={transitionVariantPage}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                >

                </motion.div>
            </div>
        </AnimatePresence>
    </>
  )
}

export default Transition