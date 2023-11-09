import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProperties } from "../reducers/actions";

function ImageCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(updateProperties(product));
    navigate(`/printtype`);
  };

  return (
    <div>
      <Card
        sx={{
          minHeight: 260,
          minWidth: 210,
          m: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        onClick={handleProductClick}
      >
        <CardActionArea>
          <CardContent>
            <img
              src={product.imageURL}
              height={product.height}
              width={product.width}
              alt=""
              style={{
                borderRadius: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            />
          </CardContent>
          <CardContent>
            {product.id}
            <Typography gutterBottom component="div">
              Size : {product.inchSize}" <br />
              <Typography sx={{ fontSize: 14 }}>({product.mmSize})</Typography>
            </Typography>
            <Typography>Price: ₹{product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ImageCard;
