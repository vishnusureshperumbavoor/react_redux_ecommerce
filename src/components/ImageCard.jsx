import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Table,TableRow, TableCell } from "@mui/material";

function ImageCard({product}) {
  console.log(product);
  return (
    <div>
      <Card sx={{ maxWidth: 300, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.imageURL}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              Size : {product.inchSize} <br />
              <Typography sx={{fontSize:14}}>{product.mmSize}</Typography>
            </Typography>
            <Typography>Price: {product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ImageCard