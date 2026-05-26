import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sophia",
    review:
      "Absolutely loved the ambience and coffee quality. One of the best cafés in town!",
  },

  {
    name: "Daniel",
    review:
      "A perfect place to relax and work. The cappuccino was amazing.",
  },

  {
    name: "Emma",
    review:
      "Beautiful interior, friendly staff, and premium coffee experience.",
  },

  {
    name: "Arjun",
    review:
      "The snacks were fresh and tasty. Loved the cheese burger and cold coffee.",
  },

  {
    name: "Priya",
    review:
      "Urban Brew has a cozy vibe. Perfect place to hang out with friends.",
  },

  {
    name: "Rahul",
    review:
      "Fast service, great taste, and the table booking feature is very useful.",
  },
];

function Testimonials() {
  return (
    <section
  className="py-24 px-6 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1521017432531-fbd92d768814')",
  }}
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-yellow-500 text-lg font-semibold">
            TESTIMONIALS
          </h2>

          <h1 className="text-5xl font-bold text-white mt-4">
            What Our Customers Say
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-black p-8 rounded-3xl border border-gray-800 shadow-xl"
            >
              <h1 className="text-2xl font-bold text-yellow-500 mb-4">
                {item.name}
              </h1>

              <p className="text-gray-400 leading-8">
                "{item.review}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;