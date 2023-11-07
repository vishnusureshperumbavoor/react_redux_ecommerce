import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import { productData } from "../data/data";


function PrintSize() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ borderBottom: 2, borderColor: "#679e1e" }}>
          <Typography
            sx={{ mt: 6, mb: 6, fontFamily: "Times New Roman", fontSize: 20 }}
          >
            Select a print size
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 17.4 }}>
          {productData.map((product, index) => (
            <ImageCard key={index} product={product} />
          ))}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default PrintSize;
