import React from "react";
import { motion } from "framer-motion";

 const SuccessPage = ({handleReset}: {handleReset: () => void}) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full min-h-[600px] bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8"
    >
      {/* Animated Success Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.6 }}
        className="relative mb-8"
      >
        <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M9 12L11 14L15 10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
        
        {/* Animated rings around the icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-32 h-32 border-4 border-green-400 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-32 h-32 border-2 border-emerald-300 rounded-full"
        />
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Message Sent! 🎉
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed"
        >
          Thank you for reaching out! We've received your message and will get back to you within 24 hours.
        </motion.p>
      </motion.div>

      {/* Animated particles/confetti effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: 100, 
              x: Math.random() * 400,
              rotate: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: -100, 
              rotate: 360 
            }}
            transition={{ 
              delay: 1 + Math.random() * 2, 
              duration: 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
            className={`absolute w-3 h-3 rounded-full ${
              i % 4 === 0 ? 'bg-green-400' : 
              i % 4 === 1 ? 'bg-emerald-500' : 
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-blue-400'
            }`}
          />
        ))}
      </div>

      {/* Reset Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
        >
          <motion.svg
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C9.61386 21 7.5008 19.9657 6.09173 18.3259"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12L6 9M3 12L6 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          Send Another Message
        </motion.button>
      </motion.div>
    </motion.div>
  );
export default SuccessPage;