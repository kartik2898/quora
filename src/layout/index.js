import Header from "../Components/Header";
import SmallHeader from "../Components/Header/SmallHeader";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./layout.css"


function Layout() {
    return (
        <>
            <Container sx={{ flexGrow: 1 }} className="layout-container">
                <Header />
                <SmallHeader/>
                <Outlet />
            </Container>
        </>
    )

}

export default Layout;