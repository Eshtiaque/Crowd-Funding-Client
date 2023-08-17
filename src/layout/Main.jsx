import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Header from "../Components/Home/Header/Header";



const Main = () => {
    return (
        <div className="">
            <ScrollRestoration />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;