import { motion } from 'framer-motion'
import Button from '../Button'
import { firstHeading, firstSubtext } from '@/data'

export default function IntroScreen({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotate: 10 }}
      animate={{ opacity: 1, x: 0, rotate: 0, transition: { delay: 0.5, duration: 0.8 } }}
      exit={{ opacity: 0, x: -80, rotate: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#fff6f8] backdrop-blur- rotate-3 max-w-75 md:max-w-100 flex flex-col items-center justify-center p-6"
      style={{
        boxShadow: '-2px 2px 2px 0 rgba(0, 0, 0, 0.2)',
      }}>

      {/* tape */}
      <div className="absolute -top-2 -right-6 rotate-45 w-15 h-6 rounded-m shadow-sm opacity-30 bg-linear-to-r from-rose-400 to-primary" />
      <div className="absolute -bottom-2 -left-6 rotate-45 w-15 h-6 rounded-m shadow-sm opacity-30 bg-linear-to-r from-rose-400 to-primary" />

      <motion.div className="mb-8">
        <img src="/gifs/gift.gif" className='w-30' alt="gif-box" />
      </motion.div>

      <h1 className="text-4xl md:text-5xl text-primary text-center font-caveat font-semibold mb-4">{firstHeading}</h1>
      <p className='text-center'>{firstSubtext}</p>

      <Button onClick={onNext}>
        Open it
      </Button>
    </motion.div>
  )
}