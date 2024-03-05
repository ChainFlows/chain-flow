// components
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        head="React Bootstrap Starter"
        description="this is a react bootstrap starter template"
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
