import Header from "./Header";
import Footer from "./Footer";
import CollapsibleAside from "./CollapsibleAside";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <CollapsibleAside />
        <main>{children}</main>
        <aside></aside>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
