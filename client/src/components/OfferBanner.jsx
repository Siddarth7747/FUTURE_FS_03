import { motion } from "framer-motion";

function OfferBanner() {
  return (
    <section
      id="offer"
      className="py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-black/75 backdrop-blur-md border border-yellow-500/30 rounded-[40px] p-10 md:p-16 shadow-[0_0_45px_rgba(234,179,8,0.18)]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-500 tracking-[6px] font-bold mb-5">
              LIMITED TIME OFFER
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Sip More, <br /> Save More
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              Enjoy a premium café experience with an exclusive first booking
              discount at Urban Brew Café.
            </p>

            <a
              href="#contact"
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
            >
              Book Your Table
            </a>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[360px] h-[360px] rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_70px_rgba(234,179,8,0.45)]">
              <div className="absolute top-12 left-[145px] text-black text-4xl animate-pulse">
                ~
              </div>

              <div className="absolute top-8 left-[185px] text-black text-4xl animate-pulse">
                ~
              </div>

              <div className="relative w-56 h-40 bg-black rounded-b-[90px] rounded-t-[25px] border-4 border-black flex items-center justify-center">
                <div className="absolute -top-6 w-56 h-14 bg-[#5b321d] rounded-full border-4 border-black"></div>

                <div className="absolute -top-2 w-44 h-7 bg-[#8b5a2b] rounded-full opacity-70"></div>

                <div className="absolute -right-16 top-10 w-20 h-20 border-[12px] border-black rounded-full"></div>

                <div className="text-center z-10 mt-6">
                  <h2 className="text-yellow-500 text-6xl font-extrabold">
                    20%
                  </h2>

                  <p className="text-white text-2xl font-bold tracking-widest">
                    OFF
                  </p>

                  <p className="text-gray-300 text-xs mt-2">
                    FIRST BOOKING
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[78px] w-72 h-6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OfferBanner;