import { motion } from "framer-motion";
import React from "react";
import { ProfileSection } from "./header/ProfileSection";
import { ContactInfo } from "./header/ContactInfo";
import { ActionButtons } from "./header/ActionButtons";

interface HeaderProps {}

export const Header = React.memo<HeaderProps>(() => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="section-fade gradient-bg text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <ProfileSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInfo />
          <ActionButtons />
        </div>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';