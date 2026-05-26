import { motion } from "framer-motion";

function OpeningHours() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center border border-yellow-500/30 rounded-3xl p-10 bg-zinc-900/80 shadow-[0_0_35px_rgba(234,179,8,0.15)]"
      >
        <h2 className="text-yellow-500 text-lg font-semibold tracking-[5px] mb-4">
          OPENING HOURS
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Visit Urban Brew Café
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold text-yellow-500 mb-3">
              Mon – Fri
            </h3>
            <p className="text-3xl font-bold">
              9 AM – 10 PM
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold text-yellow-500 mb-3">
              Sat – Sun
            </h3>
            <p className="text-3xl font-bold">
              10 AM – 11 PM
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OpeningHours;