import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.60)), url('https://images.unsplash.com/photo-1442512595331-e89e73853f31')",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
          alt="coffee"
          className="rounded-3xl shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-yellow-500 text-lg font-semibold mb-4">
            ABOUT US
          </h2>

          <h1 className="text-5xl font-bold text-white leading-tight">
            We Serve The Finest Coffee Experience
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Urban Brew is more than just a coffee shop — it is a cozy space
            created for coffee lovers, friends, students, and dreamers. We serve
            freshly brewed coffee, tasty snacks, refreshing drinks, and sweet
            desserts with a warm café vibe.
            <br />
            <br />
            Every cup at Urban Brew is prepared with care, using rich flavors
            and fresh ingredients to give you a relaxing and memorable
            experience. From morning coffee breaks to evening hangouts, our café
            is designed to make every moment feel special.
            <br />
            <br />
            Whether you want to work peacefully, meet your friends, celebrate
            small moments, or simply enjoy your favorite drink, Urban Brew gives
            you the perfect place to sip, smile, and stay a little longer.
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;