import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../Button'
import { reasons, secondHeading, secondSubtext } from '@/data'

export default function WhyYouScreen({ onNext }) {
    const [tap1, setTap1] = useState(false)
    const [tap2, setTap2] = useState(false)
    const [tap3, setTap3] = useState(false)
    const [tap4, setTap4] = useState(false)

    const cardStates = [tap1, tap2, tap3, tap4]
    const setStates = [setTap1, setTap2, setTap3, setTap4]

    const cardStyles = [
        {
          bg: "bg-linear-to-b from-[#ffe9ec] to-[#ffc9cf]",
          cover: "bg-linear-to-b from-[#ffb4b4] to-[#ff8f8f]",
        },
        {
          bg: "bg-linear-to-b from-[#ffecde] to-[#ffcfa2]",
          cover: "bg-linear-to-b from-[#ffcaa0] to-[#ffb074]",
        },
        {
          bg: "bg-linear-to-b from-[#ffe7f2] to-[#ffc6e4]",
          cover: "bg-linear-to-b from-[#ffb3d9] to-[#ff8fc7]",
        },
        {
            bg: "bg-linear-to-b from-[#f0e9ff] to-[#d9c9ff]",
            cover: "bg-linear-to-b from-[#d4baff] to-[#b899ff]",
          }
          
      ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 80, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -80, rotate: -10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative bg-[#fff6f8] -rotate-3 max-w-75 md:max-w-100 flex flex-col items-center justify-center p-6"
            style={{
                boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.2)',
            }}
        >

            {/* tape */}
            <div className="absolute -top-2 -left-6 -rotate-45 w-15 h-6 opacity-30 bg-linear-to-r from-rose-400 to-rose-500" />
            <div className="absolute -bottom-2 -right-6 -rotate-45 w-15 h-6 opacity-30 bg-linear-to-r from-rose-400 to-rose-500" />

            <h1 className="text-4xl md:text-5xl font-caveat font-semibold text-primary mb-2 text-center">
                {secondHeading}
            </h1>
            <p className="text-sm text-gray-500 font-light mb-4">
                {secondSubtext}
            </p>
            <p className='-mb-8 invisible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            {/* Cards */}
            <div className="grid grid-cols-2 items-center justify-center gap-3 md:gap-4">
                {cardStyles.map((style, i) => (
                    <div
                        key={i}
                        onClick={() => setStates[i](!cardStates[i])}
                        className={`heart-card heart ${cardStates[i] ? "tapped" : ""}
                        relative h-24 md:h-28 w-full 
                        flex items-center justify-center
                        overflow-hidden cursor-pointer will-change-transform transition-all 
                        ${style.bg}`}
                    >
                        <div className={`heart-card-cover will-change-auto ${style.cover}`}>
                        </div>

                        {/* Text */}
                        <p className="px-2 -mt-6 text-center max-h-17 overflow-y-scroll leading-tight">
                            {reasons[i]}
                        </p>
                    </div>
                ))}
            </div>
            <Button onClick={onNext}>
                Continue
            </Button>
        </motion.div>
    )
}
