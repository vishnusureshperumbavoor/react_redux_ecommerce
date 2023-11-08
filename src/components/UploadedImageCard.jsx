import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { productData } from "../data/data";
import NotFound from "./NotFound";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { decrementCountSingleProduct, incrementCountSingleProduct } from "../reducers/actions";

function UploadedImageCard({ product }) {
    const dispatch = useDispatch()
  const params = useParams();
  let productId = Number(params.id);
  productId = productData.find((product) => product.id === productId);
  if (!productId) {
    return <NotFound />;
  }
  const handleSingleCardIncrement = () => {
    dispatch(incrementCountSingleProduct(product.id))
  };
  const handleSingleCardDecrement = () => {
    dispatch(decrementCountSingleProduct(product.id));
  };
  return (
    <div>
      <div>
        <Card
          sx={{
            maxWidth: 345,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <CardContent>
            <img
              src={URL.createObjectURL(product.fileData)}
              height="140"
              width={product.uploadImageWidth}
              alt="Uploaded"
              style={{
                borderRadius: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                objectFit: "cover",
              }}
            />
          </CardContent>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "background.paper",
                borderRadius: 1,
                alignItems: "center",
              }}
            >
              <Button
                component="label"
                variant="contained"
                sx={{
                  background: "#252526",
                  mb: 2,
                  mr: 2,
                }}
                onClick={handleSingleCardIncrement}
              >
                <AddIcon />
              </Button>
              <Typography sx={{ margin: "auto" }}>{product.count}</Typography>
              <Button
                component="label"
                variant="contained"
                sx={{
                  background: "#252526",
                  mb: 2,
                  ml: 2,
                }}
                onClick={handleSingleCardDecrement}
              >
                <RemoveIcon />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default UploadedImageCard;
