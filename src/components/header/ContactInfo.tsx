import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export const ContactInfo = React.memo(() => {
  return (
    <div className="space-y-3">
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <MapPin className="w-5 h-5" />
        <p>R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
      </motion.div>
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <Phone className="w-5 h-5" />
        <p>(11) 992728063</p>
      </motion.div>
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
      >
        <Mail className="w-5 h-5" />
        <p>Az746516@gmail.com</p>
      </motion.div>
    </div>
  );
});

ContactInfo.displayName = 'ContactInfo';