import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 px-4 flex items-center justify-between">
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <h1 className="font-bold text-xl text-blue-600">ArrayVerse</h1>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="w-64 h-full bg-white">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-xl">
                ✕
              </button>
            </div>

            <Sidebar mobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
