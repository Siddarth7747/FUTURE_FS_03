import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center text-white overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="text-8xl mb-6">☕</div>

        <motion.div
          animate={{ y: [-10, -35, -10], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-10 left-8 text-3xl"
        >
          ♨
        </motion.div>

        <motion.div
          animate={{ y: [-5, -30, -5], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute -top-8 left-16 text-2xl"
        >
          ♨
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-yellow-500 mt-4"
      >
        Urban Brew
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-zinc-400 mt-4 text-lg"
      >
        Brewing fresh coffee experience...
      </motion.p>

      <div className="w-64 h-2 bg-zinc-800 rounded-full mt-8 overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-full bg-yellow-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default Loader;