export default function Home() {
  return (
    <div>
      <div>
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
