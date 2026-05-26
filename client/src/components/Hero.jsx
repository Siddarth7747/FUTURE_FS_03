import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-8 pt-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.70)), url('https://images.unsplash.com/photo-1511920170033-f8396924c348')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-500 tracking-[6px] font-bold mb-6 text-sm md:text-base"
          >
            — WELCOME TO URBAN BREW CAFE —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white"
          >
            Craft Coffee <br />
            Cozy <br />
            <span className="text-yellow-500">Vibes</span>
          </motion.h1>

          <p className="text-gray-200 text-lg leading-8 mt-6 max-w-xl">
            At Urban Brew Café, every cup is crafted with passion, rich aroma,
            and fresh flavors. Enjoy a premium café ambience, delicious snacks,
            refreshing drinks, and sweet desserts made to create memorable
            moments.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="#menu"
              className="bg-yellow-500 text-black px-7 py-4 rounded-full font-bold shadow-[0_0_25px_rgba(234,179,8,0.45)]"
            >
              ☕ Explore Menu
            </a>

            <a
              href="#contact"
              className="border border-yellow-500 text-white px-7 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition"
            >
              📅 Book Table
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
            alt="coffee cup"
            className="w-[420px] h-[420px] object-cover rounded-full shadow-[0_0_60px_rgba(234,179,8,0.35)] border border-yellow-500/40"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;