import { useState } from 'react';

export default function CoreSkills() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState('');
  const content = [
    {
      title: 'Content Creation',
      body: 'I break down complex ideas into more relatable and engaging content.',
    },
    {
      title: 'Paid Advertising (Display)',
      body: 'I transform data into actionable insights to optimize ad performance and drive ROI.',
    },
  ];

  const skillsLogos = [
    { src: 'assets/logos/capcut.png', name: 'CapCut' },
    { src: 'assets/logos/edits.png', name: 'Edits' },
    { src: 'assets/logos/canva.png', name: 'Canva' },
    { src: 'assets/logos/instagram.png', name: 'Instagram' },
    { src: 'assets/logos/facebook.png', name: 'Facebook' },
    { src: 'assets/logos/tiktok.png', name: 'TikTok' },
    { src: 'assets/logos/ga4.png', name: 'GA4' },
    { src: 'assets/logos/ga.png', name: 'Google Analytics' },
    { src: 'assets/logos/caasie.png', name: 'CAASie' },
    { src: 'assets/logos/mailchimp.png', name: 'Mailchimp' },
  ];
  return (
    <section id="skills" className="flex flex-col justify-center px-6 py-12 md:py-16 lg:py-32">
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse justify-center items-center lg:grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32">
        <div
          className="flex relative group origin-center aspect-square w-[95%] max-w-100"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {skillsLogos.map(({ src, name }, index) => (
            <div
              key={index}
              className={` absolute w-12 md:w-16 h-1/2 top-0 left-[calc(50%-1.5rem)] md:left-[calc(50%-2rem)] flex flex-row items-start spincircleouter overflow-visible ${paused ? ' paused' : ''}`}
              style={{ animationDelay: `${-index}s`, transform: `rotate(${360 / skillsLogos.length}deg)` }}
            >
              <img
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered('')}
                src={src}
                alt={name + ' logo'}
                className={`cursor-pointer spincircleinner shadow-md rounded-[25px] ${paused ? 'paused' : ''} md:hover:shadow-primary md:hover:shadow-lg md:hover:scale-110 transition-all duration-300`}
                style={{ animationDelay: `${-index}s` }}
                onClick={() => window.open(`https://www.google.com/search?q=${name}`, '_blank')}
              />
            </div>
          ))}
          <div className="absolute flex flex-row justify-center items-center text-wrap w-full h-full text-center pointer-events-none">
            <span
              className={`text-accent-2 absolute top-34 text-3xl font-body h-30 flex justify-center items-center w-30 text-center font-semibold ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            >
              {hovered}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-8">Core Skills</h2>
          <ul>
            {content.map((item, index) => (
              <li key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888] text-lg md:text-xl leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
