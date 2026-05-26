import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "5K+",
      title: "Happy Customers",
    },
    {
      number: "25+",
      title: "Coffee Varieties",
    },
    {
      number: "4.8",
      title: "Customer Rating",
    },
    {
      number: "3+",
      title: "Years Experience",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.08 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-3">
              {item.number}
            </h1>

            <p className="text-zinc-300 font-medium">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;