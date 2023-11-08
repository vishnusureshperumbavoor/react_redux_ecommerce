import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useParams } from "react-router-dom";

function Footer() {
  const { id } = useParams();
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
            {id && (
              <Button
                sx={{
                  background: "#679e1e",
                  border: 1,
                  borderRadius: 2,
                  marginLeft: "auto",
                }}
                variant="contained"
              >
                Next
                <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer;
