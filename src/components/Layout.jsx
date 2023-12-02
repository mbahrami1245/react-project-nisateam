import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  
  return (
    <section className="w-[100vw] h-[100vh] max-w-screen-2xl mx-auto grid grid-cols-5 grid-rows-1">
      <nav className="hidden xl:block col-span-1 row-span-1">
        <Navbar />
      </nav>
      <section className="col-span-5 xl:col-span-4 row-span-1 overflow-auto">{children}</section>
    </section>
  );
};

export default Layout;
