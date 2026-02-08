import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-[#0B0F19] ">
      <div className="md:container md:mx-auto px-4">
        <header className="h-20 flex items-center justify-between">
          <div className="mx-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#142659] to-[#0B1020]">
            <h3 className="text-3xl text-green-500 font-bold">Logo</h3>
          </div>
          <div>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent
  underline underline-offset-4 hover:text-green-500 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition duration-300"
                >
                  Assets
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </header>

        <section
          id="title"
          className="text-center flex flex-col justify-center items-center"
        >
          <h1 className="font-['Audiowide'] font-extrabold uppercase lg:text-8xl md:text-7xl sm:text-6xl text-5xl tracking-[0.08em] leading-none text-[#22c55e] py-8">
            AI TRADING EDGE
          </h1>

          <div className="flex flex-col md:flex-row text-white gap-8 mt-12 w-full">
            <div className="flex-1 flex flex-col">
              <div className="bg-gradient-to-r text-start from-[#142659] to-[#0B1020] py-2 rounded-lg">
                <h2 className="pl-4 font-bold">NAVIGATION</h2>
              </div>

              <div className="mt-6 text-start space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We built a neural engine that learns market patterns in real
                  time. Our mission is to empower traders with predictive
                  insights that adapt to volatility and opportunity.
                </p>

                <p>
                  In 2024, we launched live signals, deepened integrations, and
                  delivered measurable alpha. This snapshot highlights what we
                  achieved together through AI, automation, and risk management.
                  Thank you for being part of our story.
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="bg-gradient-to-r text-start from-[#142659] to-[#0B1020] py-2 rounded-lg">
                <h2 className="pl-4 font-bold">FEATURES</h2>
              </div>

              <div className="mt-6 text-start space-y-4 text-gray-300 leading-relaxed">
                <p>
                  In 2024, our platform made AI trading feel intuitive and
                  powerful. From real-time alerts to our portfolio optimizer and
                  risk simulator, we offered tools that brought confidence and
                  clarity to every trade.
                </p>

                <p>
                  Plans include launching mobile alerts, growing institutional
                  partnerships, and building stronger integrations with
                  exchanges and brokers. We're excited to keep making AI part of
                  every trading decision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
