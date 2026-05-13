export default function WifiProviderLanding() {
  const plans = [
    {
      name: 'Starter',
      speed: '100 Mbps',
      price: '₹699/mo',
      features: ['Unlimited Data', 'Free Router', '24/7 Support'],
    },
    {
      name: 'Pro Fiber',
      speed: '300 Mbps',
      price: '₹1199/mo',
      features: ['Unlimited Data', 'Gaming Optimized', 'Priority Support'],
    },
    {
      name: 'Ultra X',
      speed: '1 Gbps',
      price: '₹2499/mo',
      features: ['Unlimited Data', 'WiFi 6 Router', 'Business Grade Stability'],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 backdrop-blur-xl">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            netrun<span className="text-cyan-400">NET</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#plans" className="hover:text-white transition">Plans</a>
          <a href="#coverage" className="hover:text-white transition">Coverage</a>
          <a href="#speed" className="hover:text-white transition">Speed Test</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full transition">
          Get Connected
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6 text-sm text-cyan-300">
            ⚡ India's Next Generation Fiber Internet
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Ultra Fast
            <span className="block text-cyan-400">Fiber Internet</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            Experience blazing fast speeds, zero buffering, and seamless connectivity powered by netrunNet advanced fiber infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl transition shadow-lg shadow-cyan-500/30">
              View Plans
            </button>

            <button className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-2xl transition text-gray-300 hover:text-white">
              Check Availability
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-400 text-sm">Current Network Speed</p>
                <h3 className="text-4xl font-bold mt-2">947 Mbps</h3>
              </div>

              <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 text-2xl">
                ⚡
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Download</span>
                  <span>947 Mbps</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[94%] bg-cyan-400 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Upload</span>
                  <span>812 Mbps</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[81%] bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-gray-400 text-sm">Latency</p>
                <h4 className="text-2xl font-bold mt-2">5ms</h4>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-gray-400 text-sm">Users</p>
                <h4 className="text-2xl font-bold mt-2">12K+</h4>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-gray-400 text-sm">Uptime</p>
                <h4 className="text-2xl font-bold mt-2">99.9%</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Internet Plans</h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect fiber plan for your home or business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-cyan-400 text-5xl font-black mb-4">
                {plan.speed}
              </p>
              <p className="text-gray-300 mb-8">{plan.price}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <span className="text-cyan-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-2xl transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6">
                Expanding High-Speed Coverage
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                netrunNet is rapidly expanding across cities with next-generation fiber infrastructure.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-2xl transition">
                  Check Coverage
                </button>

                <button className="border border-white/20 px-6 py-3 rounded-2xl hover:border-cyan-400 transition">
                  View Network Map
                </button>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-3xl h-80 flex items-center justify-center text-gray-500 text-xl">
              🌐 Interactive Coverage Map
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 px-6 py-10 mt-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              netrun<span className="text-cyan-400">NET</span>
            </h3>
            <p className="text-gray-500 mt-2">
              Next-generation fiber internet infrastructure.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
