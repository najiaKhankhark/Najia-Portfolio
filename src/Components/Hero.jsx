import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center pt-24 text-white bg-black"
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8">

        {/* 🔥 GLASS CONTAINER */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10">

          {/* GRID */}
          <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8">

            {/* TEXT */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold"
              >
                Nazreen
              </motion.h1>

              <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300">
                <Typewriter
                  words={[
                    "Forensic Legal Expert",
                    "Criminal Lawyer (Medico-legal cases)"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </p>

              {/* DESKTOP BUTTONS */}
              <div className="hidden md:flex gap-4 mt-6">
                <button
                  onClick={() => scrollToSection("experience")}
                  className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 transition"
                >
                  View Experience
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 rounded-full border border-white/30 hover:border-white transition"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* IMAGE + MOBILE BUTTONS */}
            <div className="flex flex-col items-center mt-4 md:mt-0">
              
              <motion.img
                src="/najia.jpeg"
                alt="Najia"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-60 sm:w-64 md:w-72 rounded-full border-4 border-white/20 shadow-xl"
              />

              {/* MOBILE BUTTONS */}
              <div className="flex gap-4 mt-6 md:hidden">
                <button
                  onClick={() => scrollToSection("experience")}
                  className="px-5 py-2 rounded-full bg-red-500"
                >
                  Experience
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-2 rounded-full border border-white/30"
                >
                  Contact
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;