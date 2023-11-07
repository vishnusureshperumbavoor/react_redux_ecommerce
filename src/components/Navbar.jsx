import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  return (
    <div>
      <AppBar position="static" sx={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LocalPrintshopIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#000" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000",
                textDecoration: "none",
              }}
            >
              VSP Prints & Gifts
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  sx={{ p: 0 }}
                  style={{ position: "absolute", right: 0, top: "20%" }}
                >
                  <Button sx={{ background: "green" }} variant="contained">
                    <HomeIcon sx={{mr:1}}/>
                    Home
                  </Button>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
