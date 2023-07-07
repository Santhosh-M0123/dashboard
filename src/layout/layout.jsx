import Sidebar from "../component/Sidebar/Sidebar";
import TopNav from "../component/Sidebar/TopNav";
import Router from "../router/Router";

function Layout(){
    return(
        <div className="layout">
            <Sidebar />

            <div className="right-content">
                <TopNav />

                <div className="nav_content">
                    <Router />
                </div>
            </div>
        </div>
    );
}

export default Layout;