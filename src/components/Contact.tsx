export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-[#888] mb-12 max-w-md">
          Have a project in mind? I'd love to hear about it. Reach out directly or find me on socials.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Replace href with real email */}
          <a
            href="mailto:levuhoang777@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 bg-accent-2 text-[#0f0f0f] font-semibold rounded-full border-2 border-accent-2 hover:text-accent-2 hover:bg-bg transition-colors duration-200 w-fit"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            levuhoang777@gmail.com
          </a>

          {/* Social links — replace href values */}
          <div className="flex gap-3 items-center">
            <a
              href="https://instagram.com/spence_ontherocks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:text-accent-2  text-accent-1 transition-all duration-200 border-2 border-accent-1 hover:border-accent-2"
              aria-label="Instagram"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="var(--color-bg)"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="var(--color-bg)" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vu-hoang-le/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:text-accent-2  text-accent-1 transition-all duration-200 border-2 border-accent-1 hover:border-accent-2"
              aria-label="LinkedIn"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
