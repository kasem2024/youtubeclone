import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 1100,
      px: { xs: 1, sm: 2, md: 4 },
      py: 1,
      backgroundColor: "rgba(15, 15, 15, 0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #2f2f2f",
      overflowX: "hidden", // prevent overflow
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Box
        component="img"
        src={logo}
        alt="YouTube Clone"
        sx={{
          height: { xs: 30, sm: 35, md: 40 },
          width: { xs: 30, sm: 35, md: 40 },
          objectFit: "contain",
        }}
      />
    </Link>

    <Box sx={{ flex: 1, minWidth: 0, mx: { xs: 1, sm: 2 } }}>
      <SearchBar />
    </Box>
  </Stack>
);

export default Navbar;
