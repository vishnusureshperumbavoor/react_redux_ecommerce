import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { Box, Button, Container, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { productData } from "../data/data";
import ImageCard from "./ImageCard";
import { useState } from "react";
import UploadedImageCard from "./UploadedImageCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PermMediaIcon from "@mui/icons-material/PermMedia";

function ImageUpload() {
  const [uploadData, setUploadData] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);

  // const handleUploadButtonClick = (e) => {
  //   e.target.nextSibling;
  // };

  const handleFileInputChange = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setUploadData((prevImages) => [...prevImages, newImage]);
      setFileInputKey((prevKey) => prevKey + 1);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div>
      <Navbar />
      <Box sx={{ minHeight: 537 }}>
        <Typography sx={{ mt: 5, fontFamily: "Times New Roman", fontSize: 20 }}>
          Please select number of prints
        </Typography>
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "#679e1e",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginRight: "auto", mr: 50 }}></Box>
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                background: "#252526",
                mb: 2,

                // justifyContent:"center"
              }}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                accept="image/png, image/gif, image/jpeg"
                key={fileInputKey}
                onChange={handleFileInputChange}
              />
            </Button>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              component="label"
              variant="contained"
              sx={{
                background: "#252526",
                mb: 2,
                mr: 2,
              }}
            >
              <PermMediaIcon />
              <AddIcon />
            </Button>
            <Button
              component="label"
              variant="contained"
              sx={{
                background: "#252526",
                mb: 2,
                mr: 2,
              }}
            >
              <PermMediaIcon />
              <RemoveIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          {uploadData.map((image, index) => (
            <UploadedImageCard key={index} image={image} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default ImageUpload;
