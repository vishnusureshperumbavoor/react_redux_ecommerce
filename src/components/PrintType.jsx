import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { productData } from "../data/data";
import NotFound from "./NotFound";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

function PrintType() {
  const params = useParams();
  const productId = Number(params.id);
  let product = productData.find((product) => product.id === productId);
  const [paperType, setPaperType] = useState("glossy");
  const [border, setBorder] = useState("border");

  const handlePaperType = (e, newAlignment) => {
    e.preventDefault();
    setPaperType(newAlignment);
  };

  const handleBorder = (e, newAlignment) => {
    e.preventDefault();
    setBorder(newAlignment);
  };

  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "537px" }}>
        <Container>
          <Box>
            <Typography
              sx={{ mt: 5, mb: 8, fontFamily: "Times New Roman", fontSize: 20 }}
            >
              Select a print type and availabilty of border
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              "& > :not(style)": {},
            }}
          >
            <Paper elevation={3}>
              <Container>
                <Box sx={{ borderBottom: 2, borderColor: "#679e1e" }}>
                  <Typography sx={{ mt: 1 }}>Paper Type</Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={paperType}
                    exclusive
                    onChange={handlePaperType}
                    aria-label="Platform"
                    sx={{ mb: 2, mr: 2, ml: 2 }}
                  >
                    <ToggleButton value="glossy">Glossy</ToggleButton>
                    <ToggleButton value="luster">Luster</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box>
                  <Typography sx={{ mt: 1 }}>Border</Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={border}
                    exclusive
                    onChange={handleBorder}
                    aria-label="Platform"
                    sx={{ mb: 2, mr: 2, ml: 2 }}
                  >
                    <ToggleButton value="borderless">
                      <Card
                        sx={{
                          minWidth: 210,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        {/* <CardActionArea> */}
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
                          <Typography>Borderless</Typography>
                        </CardContent>
                      </Card>
                    </ToggleButton>
                    <ToggleButton value="border">
                      <Card
                        sx={{
                          minWidth: 210,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        {/* <CardActionArea> */}
                        <CardContent>
                          <img
                            src={product.imageURL}
                            height={product.height}
                            width={product.width}
                            alt=""
                            style={{
                              padding: 2,
                              borderRadius: 2,
                              boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            }}
                          />
                        </CardContent>
                        <CardContent>
                          <Typography>Border</Typography>
                        </CardContent>
                        {/* </CardActionArea> */}
                      </Card>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Container>
            </Paper>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default PrintType;
