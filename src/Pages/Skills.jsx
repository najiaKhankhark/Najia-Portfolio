import { motion } from "framer-motion";

const Skills = () => {

  const skills = [
    "Crime Investigation & Evidence Handling",
    "Legal Procedures & Basic Drafting",
    "Report Writing & Case Documentation",
    "Client Communication & Case Understanding",
  ];

  return (
    <section
      id="skills"
      className="h-screen flex items-center justify-center px-4 text-white
      bg-[radial-gradient(circle_at_top,#0f172a,#020617,#000000)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full backdrop-blur-2xl 
        bg-linear-to-br from-blue-500/80 via-pink-500/80 to-transparent
        border border-pink-400/20 rounded-3xl 
        shadow-[0_0_40px_rgba(236,72,153,0.2)] 
        p-6 md:p-10"
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Core Skills
        </h2>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-5 rounded-xl 
              bg-black/40 border border-blue-400/20 
              hover:border-pink-400/40 
              hover:bg-linear-to-r hover:from-blue-500/10 hover:to-pink-500/10
              transition duration-300"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Skills;