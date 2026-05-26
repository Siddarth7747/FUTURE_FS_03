function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 pt-3">
      <div className="w-full px-10 py-4 flex items-center justify-between bg-black/70 backdrop-blur-md border border-yellow-500/30 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.15)]">

        <a href="#home" className="flex items-center gap-4">
          <div className="relative w-18 h-18 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.35)]">
              <div className="w-12 h-12 rounded-full border border-yellow-500/60 flex items-center justify-center">
                <span className="text-yellow-500 text-2xl font-serif font-bold">
                  UB
                </span>
              </div>
            </div>

            <span className="absolute -top-3 text-yellow-500 text-xl animate-pulse">
              ♨
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-serif font-bold text-white leading-none">
              Urban <span className="text-yellow-500">Brew</span>
            </h1>

            <div className="flex items-center gap-3 mt-2">
              <span className="w-10 h-[1px] bg-yellow-500"></span>
              <p className="text-xs tracking-[6px] text-zinc-300">
                COFFEE HOUSE
              </p>
              <span className="w-10 h-[1px] bg-yellow-500"></span>
            </div>
          </div>
        </a>

        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-yellow-500 transition">
              Menu
            </a>
          </li>

          <li>
            <a href="#offer" className="hover:text-yellow-500 transition">
              Offer
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          Book Table
        </a>

      </div>
    </nav>
  );
}

export default Navbar;