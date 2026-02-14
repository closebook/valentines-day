import { motion } from 'framer-motion'
import Button from '../Button'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import { photos, photoScreenHeading, photoScreenSubtext } from '@/data'

export default function PhotosScreen({ onNext }) {
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

            <h1 className="text-4xl md:text-5xl text-primary text-center font-caveat font-semibold mb-2">{photoScreenHeading}</h1>
            <p className="text-sm text-gray-500 font-light mb-4">
                {photoScreenSubtext}
            </p>
            <p className='-mb-10 invisible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <Swiper
                effect="fade"
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-53.75 h-70 md:w-59.25 md:h-77.5"
            >
                {photos.map((src, i) => (
                    <SwiperSlide key={i}>
                        <motion.div
                            className="h-full w-full p-2 bg-linear-to-tr from-pink-200/60 via-rose-200/60 to-red-200/60 backdrop-blur-sm"
                        >
                            <div className="relative h-full w-full ">

                                {/* Image */}
                                <img
                                    loading="lazy"
                                    src={src}
                                    alt={`Memory ${i + 1}`}
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: "drop-shadow(0 8px 16px rgba(244, 114, 182, 0.2))",
                                    }}
                                />

                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-black/10 to-pink-100/10 pointer-events-none " />
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button onClick={onNext}>
                Continue
            </Button>
        </motion.div>
    )
}