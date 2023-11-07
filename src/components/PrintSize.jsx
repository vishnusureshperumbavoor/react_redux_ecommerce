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
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
    },
    {
      imageURL:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      inchSize: '4*6" ',
      mmSize: "(102mm x 152mm)",
      price: "₹70",
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
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 19.4 }}>
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
