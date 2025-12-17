// Deals Banner component
function DealsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0A0A0A] via-gray-900 to-[#0A0A0A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #32CD32 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full mb-4 animate-pulse">
              🔥 LIMITED TIME OFFER
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Flash Sale!
              <br />
              <span className="text-[#32CD32]">Up to 70% OFF</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Don&apos;t miss out on incredible deals. Grab your favorites
              before they&apos;re gone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/deals"
                className="px-8 py-4 bg-[#32CD32] text-[#0A0A0A] font-bold rounded-full hover:bg-[#3DE03D] transition-colors"
              >
                Shop Deals Now
              </Link>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm">Ends in:</span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 bg-white/10 rounded font-mono">
                    12
                  </span>
                  <span>:</span>
                  <span className="px-2 py-1 bg-white/10 rounded font-mono">
                    34
                  </span>
                  <span>:</span>
                  <span className="px-2 py-1 bg-white/10 rounded font-mono">
                    56
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sale Products Preview */}
          <div className="flex gap-4">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#32CD32]/20 to-[#32CD32]/5 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
              <span className="text-5xl md:text-6xl">👟</span>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#32CD32]/20 to-[#32CD32]/5 rounded-2xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform">
              <span className="text-5xl md:text-6xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}