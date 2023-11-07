import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
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
      <Typography
        sx={{ mt: 5, mb: 8, fontFamily: "Times New Roman", fontSize: 20 }}
      >
        Select a print type
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={3}>
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
        </Paper>
      </Box>
      <Footer />
    </div>
  );
}

export default PrintType;
