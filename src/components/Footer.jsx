import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useParams, Link,useNavigate } from "react-router-dom";
import { productData } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { updateProperties } from "../reducers/actions";

function Footer({properties}) {
  const dispatch = useDispatch()
  dispatch(updateProperties(properties))
  const selector = useSelector((state)=>state.properties)
  console.log(selector);
  const { id } = useParams();
  const productId = Number(id);
  let product = productData.find((product) => product.id === productId);
  const navigate = useNavigate()
  const handleNextClick = () => {
    navigate(`/imageupload/${product.id}`)
  };
  return (
    <div>
      <AppBar position="static" sx={{ background: "#679e1e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              sx={{ background: "#679e1e", border: 1, borderRadius: 2 }}
              variant="contained"
            >
              <ArrowBackIcon sx={{ mr: 1 }} />
              Back
            </Button>
            {id && (
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
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer;
