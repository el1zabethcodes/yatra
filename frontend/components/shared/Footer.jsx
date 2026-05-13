export default function Footer() {
  return (
    <footer className="mt-10 bg-white/20 backdrop-blur-3xl py-12 px-6 border-t border-white/20 shadow-[0_-10px_60px_rgba(255,255,255,0.15)] transition-all duration-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-[#1B3B18] mb-2">Yatra</h3>
          <p className="text-[#1B3B18]/70 text-sm">
            Close the gap, shape the future.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#1B3B18]/80">
          <a href="#">Assessment</a>
          <a href="#">Roadmap</a>
          <a href="#">Mentorship</a>
          <a href="#">Privacy</a>
        </div>

        <div className="text-sm text-[#1B3B18]/60 text-center md:text-right">
          &copy; 2026 Yatra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
