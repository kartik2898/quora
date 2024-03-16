import Header from "../Components/Header";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./layout.css"


function Layout() {
    return (
        <>
            <Container sx={{ flexGrow: 1 }} className="layout-container">
                <Header />
                <Outlet />
            </Container>
        </>
    )

}

export default Layout;