import React from "react";
import { motion } from "framer-motion";

const customize = () => {
  return (
    <div className="customize">
      <motion.h1 className="lg text-center">Customization</motion.h1>
      <div className="flex gap card">
        <div className="flex-column gap">
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
        </div>
        <div className="flex-column gap">
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
        </div>
        <div className="flex-column gap">
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
          <button className="btn">Categories</button>
        </div>
      </div>
    </div>
  );
};

export default customize;
