import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%", // ✅ always fit container
        borderRadius: "999px",
        backgroundColor: "#121212",
        border: "1px solid #303030",
        overflow: "hidden",
        transition: "all 0.2s ease",
      }}
    >
      <InputBase
        placeholder="Search YouTube"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          ml: 1,
          flex: 1,
          minWidth: 0, // ✅ allows shrinking on small screens
          color: "#fff",
          fontSize: { xs: "13px", sm: "15px" },
        }}
        inputProps={{ "aria-label": "search" }}
      />

      <IconButton
        type="submit"
        sx={{
          p: { xs: "6px 8px", sm: "8px 12px" }, // ✅ smaller padding on mobile
          color: "#fff",
          backgroundColor: "#222",
          borderLeft: "1px solid #303030",
          borderRadius: 0,
          flexShrink: 0, // button doesn't shrink
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
