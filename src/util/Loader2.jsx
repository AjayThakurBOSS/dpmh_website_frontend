import React from "react";
import { motion } from "framer-motion";

const Loader2 = ({
  size = 30,
  color = "#004AAD", // Indigo-600
  thickness = 3,
  message = "",
  showText = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 ${className}`}
    >
      {/* Spinner */}
      <motion.div
        className="rounded-full border-t-transparent"
        style={{
          width: size,
          height: size,
          borderWidth: thickness,
          borderColor: color,
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Optional message */}
      {showText && (
        <p className="mt-2 text-gray-600 text-sm font-medium">{message}</p>
      )}
    </div>
  );
};

export default Loader2;







