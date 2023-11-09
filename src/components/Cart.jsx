import React from "react";
import Navbar from "./Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function Cart() {
  const files = useSelector((state) => state.products.products);
  const totalCount = useSelector((state) => state.products.totalCount);
  const properties = useSelector((state) => state.properties.properties);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const handleBackClick = () => {
    navigate(`/imageupload`);
  };
  const totalAmount = cart.reduce((total, row) => {
    return total + row.properties.price * row.totalCount;
  }, 0);
  console.log(totalAmount);
  return (
    <div>
      <Navbar />
      <Container sx={{ minHeight: 561 }}>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Box>
                        Id: {row.id} <br />
                        Size: {row.properties.inchSize}" <br></br>
                        {row.properties.border}/{row.properties.paperType}
                      </Box>
                      <Box sx={{ pl: 6 }}>
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ mr: 1 }}
                        >
                          UPDATE CART
                        </Button>
                        <Button
                          variant="contained"
                          style={{ background: "red" }}
                        >
                          REMOVE CART
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.properties.price}</TableCell>
                  <TableCell>{row.totalCount}</TableCell>
                  <TableCell>{row.properties.price * row.totalCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell
                  sx={{ fontSize: 20, fontWeight: "bold", m: 5 }}
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Subtotal:
                </TableCell>
                <TableCell
                  style={{ backgroundColor: "green", color: "white" }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    fontWeight: "bold",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  ₹{totalAmount}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Cart;
