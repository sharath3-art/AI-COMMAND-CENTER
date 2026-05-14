// Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 blur-3xl opacity-30"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-300">
          Experience the Future of Fiber Internet
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Ultra‑fast, enterprise‑grade connectivity with blazing speed and
          unmatched reliability.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
            View Plans
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-200 hover:bg-gray-800 transition">
            Check Coverage
          </button>
        </div>

        {/* Network Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
          <div>
            <p className="text-2xl font-bold text-white">1 Gbps+</p>
            <span>Speeds</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">99.99%</p>
            <span>Uptime</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">24/7</p>
            <span>Support</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">AI‑Optimized</p>
            <span>Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}

