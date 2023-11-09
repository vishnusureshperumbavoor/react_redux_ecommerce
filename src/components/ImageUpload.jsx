import React, { useEffect } from "react";
import Navbar from "./Header";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import UploadedImageCard from "./UploadedImageCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  calculateTotalCount,
  decrementCountProducts,
  incrementCountProducts,
} from "../reducers/actions";

function ImageUpload() {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate(`/cart`);
  };
  const files = useSelector((state) => state.products.products);
  const totalCount = useSelector((state) => state.products.totalCount);
  const properties = useSelector((state) => state.properties.properties);

  console.log(properties);

  const totalPrice = totalCount * properties.price;
  const dispatch = useDispatch();
  const handleMultipleCardsIncrement = () => {
    dispatch(incrementCountProducts());
  };

  const handleMultipleCardsDecrement = () => {
    dispatch(decrementCountProducts());
  };
  useEffect(() => {
    dispatch(calculateTotalCount());
  }, [handleMultipleCardsDecrement, handleMultipleCardsIncrement]);

  const handleFileInputChange = (e) => {
    const newImage = e.target.files[0];
    dispatch(addProduct(newImage));
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
    <>
      <div>
        <Navbar />
        <Box sx={{ minHeight: 577 }}>
          <Box sx={{ textAlign: "left", ml: 1 }}>
            <Typography sx={{ fontSize: 12 }}>
              Size : {properties.inchSize}" ({properties.mmSize})
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Price : ₹{properties.price}
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              {properties.paperType}/{properties.border}
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: "Times New Roman", fontSize: 20 }}>
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
                }}
              >
                Upload file
                <VisuallyHiddenInput
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
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
                onClick={handleMultipleCardsDecrement}
              >
                <PermMediaIcon />
                <RemoveIcon />
              </Button>
              <Button
                component="label"
                variant="contained"
                sx={{
                  background: "#252526",
                  mb: 2,
                  mr: 2,
                }}
                onClick={handleMultipleCardsIncrement}
              >
                <PermMediaIcon />
                <AddIcon />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 2,
              pb: 2,
            }}
          >
            {files.map((item, index) => (
              <UploadedImageCard key={index} product={item} />
            ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ mr: 2 }}>
              Total Number of prints : {totalCount}
            </Button>
            <Button variant="contained">Total Price : ₹{totalPrice}</Button>
          </Box>
        </Box>
      </div>
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
            <Button
              sx={{
                background: "#679e1e",
                border: 1,
                borderRadius: 2,
                marginLeft: "auto",
              }}
              variant="contained"
              onClick={handleCartClick}
            >
              Cart
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ImageUpload;
