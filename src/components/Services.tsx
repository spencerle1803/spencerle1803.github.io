const services = [
  {
    title: 'Content and Brand Strategy',
    description:
      'End-to-end content planning: from audience research and content pillars to editorial calendars that keep you consistent.',
  },
  {
    title: 'Social Media Management',
    description:
      'Hands-on management of your Instagram, TikTok, and LinkedIn — including posting, community engagement, and monthly reporting.',
  },
  {
    title: 'Paid Social Advertising',
    description:
      'Data-driven ad campaigns on Meta and TikTok designed to grow your audience and convert followers into customers.',
  },
  {
    title: 'Brand Voice & Copywriting',
    description: 'Captions, bios, email copy, and campaign messaging that sound like you... but better.',
  },
];

export default function Projects() {
  return (
    <section id="services" className="py-16 lg:py-20 px-6 border-t border-muted/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
        <p className="text-muted mb-14 max-w-md">
          {/* Adjust to fit your offer */}
          Whether you need a full strategy or just a creative partner, here's how I can help.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="p-7 bg-surface rounded-2xl border border-accent-1/10 hover:border-accent-2/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-0.5 bg-accent-2 mb-5" />
              <h3 className="font-bold text-lg mb-3 text-text">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
