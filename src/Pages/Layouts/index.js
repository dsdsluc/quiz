import { Link, Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./style.scss"


const { Header } = Layout;

function LayoutDefault() {
  

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="header__item">
            <Link to="/">QUIZ</Link>
          </div>
          
        </Header>
        <Layout className="container">
          <Outlet/>
        </Layout>
      </Layout>
    </>
  );
}
export default LayoutDefault;
