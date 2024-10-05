"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                    initial={{opacity: 1}}
                    animate= {{
                        opacity: 0, 
                        transition: {
                            delay: 1, 
                            duration: 0.4, 
                            ease: 'easeInOut'}
                        }}
                    className="h-screen w-screen fixed bg-black top-0 pointer-events-none z-[100]"
                />
                {children}
            </div>
        </AnimatePresence>      
  )
}

export default PageTransition