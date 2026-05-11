export default function About() {
  return (
    <section
      id="about"
      className="bg-accent-2/5 py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-[#888] leading-relaxed">
            {/* Replace with real bio */}
            <p>
              Hi, I'm Spencer, a Melbourne-based marketing professional with
              experience spanning performance marketing, content production and
              analytics. I thrive at the intersection of creativity and
              strategy, helping brands show up better online.
            </p>
            <p>
              Having worked across industries from financial services to
              education, I believe good marketing should be both memorable and
              measurable. I care about work that actually moves the needle,
              whether that means refining campaigns to be more cost-efficient,
              nurturing an audience or making sure a brand looks and feels
              consistent.
            </p>
            <p>
              If you're looking for someone to help grow your brand online,
              let's keep in touch! I'd love to hear what you're working on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
