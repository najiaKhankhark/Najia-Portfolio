import { motion } from "framer-motion";

const Experience = () => {

  const experience = {
    title: "Intern at District Court (CHD)",
    points: [
      "Gained practical experience in legal drafting",
      "Observed cross-examination and re-examination procedures",
      "Actively participated in college legal activities"
    ]
  };

  return (
    <section
      id="experience"
      className="h-screen flex items-center justify-center px-4 text-white
      bg-[radial-gradient(circle_at_top,#1e3a8a,#020617,#000000)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full backdrop-blur-2xl 
        bg-linear-to-br from-blue-500/80 via-pink-500/80 to-transparent
        border border-pink-400/40 rounded-3xl 
        shadow-[0_0_60px_rgba(236,72,153,0.4)] 
        p-6 md:p-10"
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Experience
        </h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-black/50 border border-blue-400/40"
        >

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {experience.title}
          </h3>

          {/* Points */}
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default Experience;