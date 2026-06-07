const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          ArrayVerse
        </h1>

        <span className="text-sm text-slate-500">
          JavaScript Array Documentation
        </span>
      </div>
    </header>
  );
};

export default Navbar;