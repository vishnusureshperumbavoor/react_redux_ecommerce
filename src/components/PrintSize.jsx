import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";
import ImageCard from "./ImageCard";

function PrintSize() {
  const productData = [
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
      height: 48,
      width: 72,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '5*7" ',
      mmSize: "(127mm x 178mm)",
      price: "₹170",
      height: 60,
      width: 84,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '6*8" ',
      mmSize: "(152mm x 203mm)",
      price: "₹250",
      height: 72,
      width: 96,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '8*10" ',
      mmSize: "(203mm x 254mm)",
      price: "₹830",
      height: 96,
      width: 120,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '10*15" ',
      mmSize: "(254mm x 381mm)",
      price: "₹1000",
      height: 120,
      width: 180,
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '3.5*3.5" ',
      mmSize: "(89mm x 89mm)",
      price: "₹70",
      height: 42,
      width: 42,
    },
  ];
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
