import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea,Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { productData } from "../data/data";
import NotFound from "./NotFound";

function UploadedImageCard({ image }) {
    const params = useParams();
    const productId = Number(params.id);
    let product = productData.find((product) => product.id === productId);
    if (!product) {
      return <NotFound />;
    }
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
            <CardActionArea>
              <CardContent>
                <img
                  src={URL.createObjectURL(image)}
                  height="140"
                  width={product.uploadImageWidth}
                  alt="Uploaded"
                  style={{
                    borderRadius: 2,
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      objectFit:"cover"
                  }}
                />
              </CardContent>
              <CardContent>
                {/* {product.id} */}
                <Typography gutterBottom component="div">
                  {/* Size : {product.inchSize} <br /> */}
                  <Typography sx={{ fontSize: 14 }}>
                    {/* {product.mmSize} */}
                  </Typography>
                </Typography>
                {/* <Typography>Price: {product.price}</Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
    </div>
  );
}

export default UploadedImageCard;
