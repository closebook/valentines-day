import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../Button';
import { question, reactionText } from '@/data';

export default function QuestionScreen({ onNext }) {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [showReaction, setShowReaction] = useState(false)

    const moveButton = () => {
        const minX = 35
        const maxX = 70
        const minY = 30
        const maxY = 60

        const randomBetween = (min, max) =>
            Math.random() * (max - min) + min

        const randomSign = () => (Math.random() > 0.5 ? 1 : -1)

        setNoBtnPosition({
            x: randomBetween(minX, maxX) * randomSign(),
            y: randomBetween(minY, maxY) * randomSign(),
        })
    }

    const handleYes = () => {
        setShowReaction(true)
        setTimeout(() => {
            onNext()
        }, 900)
    }

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

            {showReaction && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm"
                >
                    <p className="text-3xl md:text-4xl font-caveat font-semibold text-primary">
                        {reactionText}
                    </p>
                </motion.div>
            )}

            {/* tape */}
            <div className="absolute -top-2 -left-6 -rotate-45 w-15 h-6 opacity-30 bg-linear-to-r from-rose-400 to-rose-500" />
            <div className="absolute -bottom-2 -right-6 -rotate-45 w-15 h-6 opacity-30 bg-linear-to-r from-rose-400 to-rose-500" />

            <motion.div className="mb-6">
                <img src="/gifs/shy.gif" className='w-26 md:w-30' alt="shy-gif" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-caveat font-semibold text-primary text-center">
                {question}
            </h1>

            <div
                className={`flex gap-4 items-center justify-center mt-2 transition-opacity duration-200 ${showReaction ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <Button onClick={handleYes}>
                    YES!
                </Button>

                <motion.button
                    animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                    onMouseEnter={moveButton}
                    onClick={moveButton}
                    className="border border-gray-500 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-sm px-4 py-2 font-medium mt-6 transition-colors duration-300"
                >
                    No thanks
                </motion.button>
            </div>

        </motion.div>
    );
};