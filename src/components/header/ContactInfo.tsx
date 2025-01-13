import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export const ContactInfo = React.memo(() => {
  return (
    <div className="space-y-3 text-sm sm:text-base">
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <p className="break-words">R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
      </motion.div>
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <p>(11) 992728063</p>
      </motion.div>
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <p className="break-all">Az746516@gmail.com</p>
      </motion.div>
    </div>
  );
});

ContactInfo.displayName = 'ContactInfo';