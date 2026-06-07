import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-64 p-6 md:p-8 mt-16">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
