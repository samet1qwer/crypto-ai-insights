import "./App.css";

function App() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0B0F19] via-[#0d1221] to-[#0B0F19]">
      <div className="md:container md:mx-auto px-4 lg:px-8">
        <header className="h-24 flex items-center justify-between border-b border-gray-800/50">
          <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 backdrop-blur-sm">
            <h3 className="text-2xl text-green-500 font-bold tracking-tight">
              AlphaEdge AI
            </h3>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              About
            </a>
            <button className="px-6 py-2 rounded-lg bg-green-500/10 text-green-500 border border-green-500/30 hover:bg-green-500/20 transition-all">
              Sign In
            </button>
          </nav>
        </header>
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 blur-3xl"></div>

          <div className="relative text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-semibold border border-green-500/20">
                Powered by AI Neural Networks
              </span>
            </div>

            <h1 className="font-['Audiowide'] font-extrabold uppercase lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wider leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                AI TRADING EDGE
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Real-time market intelligence powered by advanced neural networks.
              Trade smarter with predictive insights that adapt to every
              opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
                Start Trading Now
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button className="px-8 py-4 rounded-xl bg-transparent text-green-500 font-bold border-2 border-green-500/30 hover:border-green-500 hover:bg-green-500/5 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#142659]/30 to-[#0B1020]/30 border border-gray-800/50 hover:border-green-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Neural Intelligence
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Our proprietary neural engine learns market patterns in
                    real-time, delivering predictive insights that adapt to
                    volatility and uncover hidden opportunities before they
                    emerge.
                  </p>
                  <p>
                    In 2024, we achieved breakthrough results with live signals,
                    advanced integrations, and measurable alpha generation. Join
                    thousands of traders leveraging AI-powered automation and
                    institutional-grade risk management.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#142659]/30 to-[#0B1020]/30 border border-gray-800/50 hover:border-green-500/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Advanced Platform
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Experience intuitive power with real-time alerts, portfolio
                    optimization, and advanced risk simulation. Every tool is
                    designed to bring confidence and clarity to your trading
                    decisions.
                  </p>
                  <p>
                    Coming soon: Mobile-first alerts, institutional
                    partnerships, and seamless exchange integrations. We're
                    building the future where AI enhances every trade you make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10 rounded-3xl blur-2xl"></div>

            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#142659]/40 to-[#0B1020]/40 border border-green-500/20 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Trading?
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Join thousands of traders gaining an AI-powered edge
                </p>

                <button className="w-full md:w-auto px-12 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
                  Start Trading Today
                </button>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="text-gray-500">
                    Already have an account?
                  </span>
                  <button className="text-green-500 font-semibold hover:text-green-400 transition-colors">
                    Sign In →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-800/50 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
              <h3 className="text-2xl text-green-500 font-bold tracking-tight">
                AlphaEdge AI
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-gray-500 text-sm">
              <p>© 2026 AlphaEdge AI. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-green-500 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
