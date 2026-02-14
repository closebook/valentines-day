"use client"

import { useState } from "react";
import IntroScreen from "@/components/screens/IntroScreen";
import Background from "@/components/Background";
import { AnimatePresence, motion } from "framer-motion";
import WhyYouScreen from "@/components/screens/WhyYouScreen";
import PhotosScreen from "@/components/screens/PhotosScreen";
import QuestionScreen from "@/components/screens/QuestionScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import Music from "@/components/Music";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)

  const screens = [
    <IntroScreen key="intro" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1)
    }} />,
    <WhyYouScreen key="why-you" onNext={() => setCurrentScreen(2)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(3)} />,
    <QuestionScreen key="question" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" />
  ]

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden" >

      <Background />

      <Music shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          className="p-6 py-10 relative"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div> */}
    </div >
  );
}
