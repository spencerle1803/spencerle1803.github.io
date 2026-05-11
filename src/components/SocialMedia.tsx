import { useState, useRef, useEffect } from "react";

function InstagramEmbed({
  src,
  playing,
  setPlaying,
}: {
  src: string;
  playing: string;
  setPlaying: (reel: string) => void;
}) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  new Date().toLocaleTimeString();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
      if (playing === src) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);
  return (
    <div className="group relative flex justify-center items-center w-70 h-140 p-1 rounded-[50px] overflow-visible bg-black">
      <img
        className="h-full w-full pointer-events-none absolute left-0 top-0 z-0 scale-105"
        src="/assets/images/phone-frame.png"
        alt="Phone frame"
      />
      <span className="absolute z-10 top-1.25 font-medium left-9 text-[13px] text-white font-[system-ui,sans-serif] select-none pointer-events-none">
        {time}
      </span>
      <video
        className="w-full h-full border-0 overflow-hidden z-10 object-contain"
        controls={false}
        ref={videoRef}
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        onClick={() => setPlaying(playing === src ? "" : src)}
        className={`cursor-pointer flex justify-center items-center bg-transparent absolute left-0 top-0 w-full z-30 h-full   transition-opacity duration-300 text-white ${playing === src ? "opacity-0 lg:hover:opacity-100" : "opacity-100"}`}
      >
        {playing === src ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-14"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-14"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function SocialMedia() {
  const reels = [
    "/assets/videos/reel3.mp4",
    "/assets/videos/reel1.mp4",
    "/assets/videos/reel2.mp4",
  ];
  const [playing, setPlaying] = useState("");

  return (
    <section id="social" className="py-16 lg:py-28 bg-accent-1/5 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Social Media</h2>
        <a
          className="flex flex-row items-center gap-3 text-2xl my-8 lg:mb-16 font-semibold text-accent-2  transition-all duration-300"
          href="https://www.instagram.com/spence_ontherocks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/logos/instagram.png"
            alt="Instagram logo"
            className="h-12 w-12"
          />
          spence_ontherocks
        </a>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {reels.map((reel, index) => (
            <InstagramEmbed
              src={reel}
              key={`reel${index}`}
              playing={playing}
              setPlaying={setPlaying}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
