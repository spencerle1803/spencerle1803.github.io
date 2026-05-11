export default function Hero() {
  return (
    <section className="flex flex-col justify-center px-6 pt-48 pb-32 bg-gradient-1">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[#888] text-sm tracking-widest uppercase mb-6">
          Social Media &amp; Marketing
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8">
          {/* Replace with your partner's name */}
          Spencer Le
        </h1>
        <p className="text-[#888] text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          {/* Replace with tagline */}
          I'm a marketer with over 2 years of experience in paid display ads,
          graphic design and content creation.
        </p>
        <div className="flex gap-x-4 gap-y-8 flex-col sm:flex-row flex-wrap">
          <a
            href="#work"
            className="px-10 py-2.5 md:py-3 border-2 border-accent-2 bg-accent-2 text-bg text-xl font-semibold rounded-full hover:bg-white hover:text-accent-2 transition-colors duration-200 w-full sm:w-fit text-center"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-10 py-2.5 md:py-3 border-2 border-accent-2 text-accent-2 text-xl font-semibold rounded-full hover:border-white/50 transition-colors duration-200 w-full sm:w-fit text-center"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
