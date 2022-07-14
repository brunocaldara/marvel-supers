import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="static" enableColorOnDark>
            <Toolbar>
                <Container>
                    <Typography variant='h1'>Marvel Super Heroes</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar