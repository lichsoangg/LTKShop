import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return <div style={{ display:"flex", gap:"4rem"}}>
        <div >
            <Link to="/product/kiet"> sản phẩm kiệt </Link>
        </div>
        <Outlet />
    </div>;
}

export default Layout;