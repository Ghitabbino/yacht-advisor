export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-luxury text-[#020817] font-bold tracking-[0.4em] text-sm mb-3">
          YACHT ADVISOR
        </p>
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.5em] mb-10">
          Your happiness is our job
        </p>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Yacht Advisor. Professional Yacht Consulting.
        </p>
      </div>
    </footer>
  );
}
