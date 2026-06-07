import { NavLink } from "react-router-dom";

const Sidebar = ({ mobile = false }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Introduction", path: "/introduction" },
    { name: "Array Creation", path: "/array-creation" },
    { name: "Add & Remove", path: "/add-remove" },
    { name: "Access Methods", path: "/access-methods" },
    { name: "Conversion & Sorting", path: "/conversion-methods" },
    { name: "Validation & Utility", path: "/validation-methods" },
    { name: "Iteration", path: "/iteration-methods" },
    { name: "Higher Order Methods", path: "/higher-order" },
    {
      name: "Advanced Methods",
      path: "/advanced-methods",
    },
    { name: "Comparison Tables", path: "/comparisons" },
    { name: "Interview Questions", path: "/interview-questions" },
    { name: "Cheat Sheet", path: "/cheat-sheet" },
  ];

  return (
    <aside
      className={
        mobile
          ? "w-full h-full bg-white overflow-y-auto"
          : "hidden md:block fixed left-0 top-16 w-64 h-screen bg-white border-r overflow-y-auto"
      }
    >
      {" "}
      <nav className="p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-1s ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-50 text-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
