import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import { productData } from "../data/data";
import { useSelector } from "react-redux";

function PrintSize() {
  let files = useSelector((state) => state.products);
  console.log(files);
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
      <Footer />
    </>
  );
}

export default PrintSize;
