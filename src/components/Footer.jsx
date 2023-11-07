import React from 'react'
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Footer() {
  return (
    <div>
      <AppBar position="static" sx={{ background: "#679e1e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              sx={{ background: "#679e1e", border: 1, borderRadius: 2 }}
              variant="contained"
            >
              <ArrowBackIcon sx={{ mr: 1 }} />
              Back
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer