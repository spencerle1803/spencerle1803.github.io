export default function About() {
  return (
    <section id="about" className="bg-accent-2/5 py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-[#888] leading-relaxed">
            {/* Replace with real bio */}
            <p>
              Hi, I'm Spencer, a marketing specialist based in Melbourne, Australia. I help brands find their voice
              online and turn that voice into real results.
            </p>
            <p>
              With over 2 years of experience across various industries, I've managed accounts from scrappy startups to
              established brands, always focused on authentic storytelling and measurable growth.
            </p>
            <p>When I'm not deep in content calendars, you'll find me [personal detail].</p>
          </div>
        </div>
      </div>
    </section>
  );
}
