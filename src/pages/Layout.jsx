import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="p-4 bg-gray-800 flex gap-4 h-20 items-center justify-center text-white">
        <Link to="/" className="mr-4" onClick={()=>setData("pratik")}>Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
       
      </nav>
      

      <div className="w-full">
        {/* Animated Toggle Button */}
        <motion.div
          className="w-20 h-20 flex items-center top-30 right-10 absolute justify-center rounded-full bg-slate-950 bg-blend-difference cursor-pointer text-white text-3xl z-20"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={45} /> : <Menu size={45} />}
        </motion.div>

        {/* Sidebar with Animation and Wavy Background */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              exit={{ width: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, duration: 1  }}
             
              className=" bg-slate-700 fixed z-10 h-screen text-4xl text-white overflow-hidden wavy-bg"
            >
              <div className="relative p-4">
                <div className="mt-40">I am sidebar</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className={`duration-500 ml-0 ${
            isOpen ? "ml-[20%] w-[80%]" : "w-full"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
