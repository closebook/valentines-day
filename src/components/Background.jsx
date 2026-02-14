import { Heart } from 'lucide-react'
import { color, motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react'

function Background() {
    const [hearts, setHearts] = useState([]);

    const colors = ['text-red-400', 'text-rose-400', 'text-rose-300'];

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            setHearts((prev) => {
                if (prev.length > 20) return prev;
                return [
                    ...prev,
                    {
                        id,
                        left: Math.random() * 100,
                        scale: Math.random() * 0.5 + 0.5,
                        duration: Math.random() * 10 + 10,
                        color: colors[Math.floor(Math.random() * colors.length)],
                    },
                ]
            });

            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== id));
            }, 20000);
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='fixed inset-0 bg-linear-to-b from-[#ffd1d0] to-[#fbe3c9] overflow-hidden'>
            {/* Grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(126,9,27,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(126,9,27,0.13)_1px,transparent_1px)] bg-size-[40px_40px]" />

            <div className="box-top absolute w-[105vw] h-[17vh] left-0 -top-5 bg-white/70 backdrop-blur-sm  will-change-transform transform-gpu" />

            <div className="box absolute w-[105vw] h-[17vh] left-0 -bottom-5 bg-white/70 backdrop-blur-sm will-change-transform" />

            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                        transition={{ duration: heart.duration, ease: "linear" }}
                        style={{
                            position: "absolute",
                            left: `${heart.left}%`,
                            fontSize: `${heart.scale * 2}rem`,
                        }}
                        className={heart.color}
                    >
                        <Heart fill="currentColor" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default memo(Background)