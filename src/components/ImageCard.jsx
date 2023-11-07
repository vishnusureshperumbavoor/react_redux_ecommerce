import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Table, TableRow, TableCell, Box } from "@mui/material";

function ImageCard({ product }) {
  console.log(product);
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
          <CardContent sx={{ height: "50%" }}>
            <Typography gutterBottom component="div">
              Size : {product.inchSize} <br />
              <Typography sx={{ fontSize: 14 }}>{product.mmSize}</Typography>
            </Typography>
            <Typography>Price: {product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ImageCard;
