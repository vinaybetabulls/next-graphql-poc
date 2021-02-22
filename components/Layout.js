import { Layout } from "antd";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <div style={{marginTop:"64px", padding:"34px"}}>{children}</div>
      <FooterComponent />
    </Layout>
  );
};

export default LayoutComponent;
