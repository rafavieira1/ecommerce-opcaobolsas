import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      >
        <Navbar />
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.main
          key={window.location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default MainLayout; 