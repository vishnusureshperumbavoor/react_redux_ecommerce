import React, { useEffect } from "react";
import Navbar from "./Header";
import { Card, CardContent, Container, Typography } from "@mui/material";
import NotFound from "./NotFound";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProperties } from "../reducers/actions";

function PrintType() {
  const [paperType, setPaperType] = useState("glossy");
  const [border, setBorder] = useState("border");
  const [properties, setProperties] = useState({});
  const property = useSelector((state) => state.properties.properties);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaperType = (e, newPaperType) => {
    e.preventDefault();
    setPaperType(newPaperType);
  };

  const handleBorder = (e, newBorder) => {
    e.preventDefault();
    setBorder(newBorder);
  };

  useEffect(() => {
    setProperties({ paperType, border });
  }, [paperType, border]);

  const handleNextClick = () => {
    dispatch(updateProperties(properties));
    navigate(`/imageupload`);
  };

  const handleBackClick = () => {
    navigate(`/`);
  };

  if (!property) {
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
                        <CardContent>
                          <img
                            src={property.imageURL}
                            height={property.height}
                            width={property.width}
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
                        <CardContent>
                          <img
                            src={property.imageURL}
                            height={property.height}
                            width={property.width}
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
                      </Card>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Container>
            </Paper>
          </Box>
        </Container>
      </div>
      <AppBar position="static" sx={{ background: "#679e1e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              sx={{ background: "#679e1e", border: 1, borderRadius: 2 }}
              variant="contained"
              onClick={handleBackClick}
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
              onClick={handleNextClick}
            >
              Next
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default PrintType;
