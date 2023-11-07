import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { productData } from "../data/data";
import NotFound from "./NotFound";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function PrintType() {
  const params = useParams();
  const productId = Number(params.id);
  let product = productData.find((product) => product.id === productId);
  const [alignment, setAlignment] = React.useState("glossy");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  if (!product) {
    return <NotFound />;
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <Typography
            sx={{ mt: 5, mb: 8, fontFamily: "Times New Roman", fontSize: 20 }}
          >
            Select a print type
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            "& > :not(style)": {
              mb: 27.7,
            },
          }}
        >
          <Paper elevation={3} sx={{ mb: 12 }}>
            <Container>
              <Box sx={{ borderBottom: 2, borderColor: "#679e1e" }}>
                <Typography sx={{ mt: 1 }}>Paper Type</Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
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
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  sx={{ mb: 2, mr: 2, ml: 2 }}
                >
                  <ToggleButton value="borderless">
                    <Typography sx={{ mr: 2 }}>Borderless</Typography>
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
                  </ToggleButton>
                  <ToggleButton value="border">
                    <img
                      src={product.imageURL}
                      height={product.height}
                      width={product.width}
                      alt=""
                      style={{
                        padding: "2px",
                        borderRadius: 2,
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    />
                    <Typography sx={{ ml: 2 }}>Border</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Container>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default PrintType;
