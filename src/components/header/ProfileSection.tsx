import { motion } from "framer-motion";
import React from "react";

export const ProfileSection = React.memo(() => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4 sm:mb-6">
      <motion.div 
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="/lovable-uploads/7418b843-f242-421c-ace3-01ea1f544e94.png" 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div>
        <motion.h1 
          className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 hover:text-highlight transition-colors duration-300 text-center sm:text-left"
        >
          Pamela Leticia Alves Ferreira
        </motion.h1>
        <motion.h2 
          className="text-xl sm:text-2xl text-highlight mb-4 sm:mb-6 text-center sm:text-left"
        >
          Biomedicina • 7º semestre
        </motion.h2>
      </div>
    </div>
  );
});

ProfileSection.displayName = 'ProfileSection';