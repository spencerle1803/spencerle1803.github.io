export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[#555] text-sm">
        <span>© {year} Spencer Le. All rights reserved.</span>
      </div>
    </footer>
  );
}
