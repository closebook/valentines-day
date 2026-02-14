import { useState } from 'react'
import { motion } from 'framer-motion'
import { message, messageScreenHeading, messageScreenSubtext } from '@/data'

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: 80, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -80, rotate: -10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[#fff6f8] rotate-3 max-w-75 md:max-w-100 flex flex-col items-center justify-center p-6"
            style={{
                boxShadow: '-2px 2px 2px 0 rgba(0, 0, 0, 0.2)',
            }}>

            {/* tape */}
            <div className="absolute -top-2 -right-6 rotate-45 w-15 h-6 rounded-m shadow-sm opacity-30 bg-linear-to-r from-rose-400 to-primary" />
            <div className="absolute -bottom-2 -left-6 rotate-45 w-15 h-6 rounded-m shadow-sm opacity-30 bg-linear-to-r from-rose-400 to-primary" />

            <h1 className="text-4xl md:text-5xl font-caveat font-semibold text-primary mb-2 text-center">
                {messageScreenHeading}
            </h1>
            <p className="text-sm text-gray-500 font-light mb-6">
                {messageScreenSubtext}
            </p>

            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                onClick={() => setOpened(!opened)}
                className={`card ${opened ? "tapped" : ""} relative w-full aspect-4/5 overflow-hidden cursor-pointer transition-all bg-[#fdedd3]
 flex items-center justify-center max-w-71.25 will-change-transform mb-4`}
            >
                <div className={`cover z-10 will-change-transform bg-[#fbd7c5]`} />

                <div className="relative px-6 h-60 md:h-66 leading-relaxed text-gray-700 overflow-y-auto whitespace-pre-wrap">
                    {message}
                </div>
            </motion.div>

        </motion.div>
    )
}

