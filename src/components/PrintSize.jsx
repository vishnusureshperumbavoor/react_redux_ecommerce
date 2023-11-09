import React from "react";
import Navbar from "./Header";
import { Box, Container, Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import { productData } from "../data/data";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function PrintSize() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "537px" }}>
        <Container maxWidth="xl">
          <Box sx={{ borderBottom: 2, borderColor: "#679e1e" }}>
            <Typography
              sx={{ mt: 6, mb: 6, fontFamily: "Times New Roman", fontSize: 20 }}
            >
              Select a print size
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            {productData.map((product, index) => (
              <ImageCard key={index} product={product} />
            ))}
          </Box>
        </Container>
      </div>
      <AppBar position="static" sx={{ background: "#679e1e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default PrintSize;
