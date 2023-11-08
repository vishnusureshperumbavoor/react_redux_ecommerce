import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import UploadedImageCard from "./UploadedImageCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useDispatch,useSelector} from "react-redux";
import { addProduct, decrementCountProducts, incrementCountProducts } from "../reducers/actions";

function ImageUpload() {
  let files = useSelector((state)=>state.products)
  console.log(files);
  const dispatch = useDispatch()
  const [cardsCount,setCardsCount] = useState(0)

  const handleMultipleCardsIncrement = ()=>{
    dispatch(incrementCountProducts())
  }

  const handleMultipleCardsDecrement = () => {
    // if(cardsCount>0){
      dispatch(decrementCountProducts());
    // }
  };

  const handleFileInputChange = (e) => {
    const newImage = e.target.files[0];
    dispatch(addProduct(newImage))
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
                mb: 2
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
              onClick={handleMultipleCardsIncrement}
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
              onClick={handleMultipleCardsDecrement}
            >
              <PermMediaIcon />
              <RemoveIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          {files.map((item, index) => (
            <UploadedImageCard
              key={index}
              image={item.fileData}
              count={item.count}
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default ImageUpload;
