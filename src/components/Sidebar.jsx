import React from "react";
import { Stack, Box } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowX: { xs: "auto", md: "hidden" },
        overflowY: { xs: "hidden", md: "auto" },
        height: { xs: "60px", md: "95%" },
        width: "100%",
        maxWidth: "100vw",
        gap: { xs: 1, md: 1.5 },
        px: { xs: 1, md: 0 },
        py: { xs: 1, md: 2 },
      }}
    >
      {categories.map((category) => {
        const isActive = category.name === selectedCategory;
        return (
          <Box
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 0.5, md: 1.5 },
              borderRadius: "30px",
              background: isActive
                ? "linear-gradient(90deg, #ff0000, #ff7b00, #ffd700)"
                : "transparent",
              flexShrink: 0, // prevent shrinking in horizontal scroll
              "&:hover": {
                background: isActive
                  ? "linear-gradient(90deg, #ff4d4d, #ff9a00, #ffe066)"
                  : "#2f2f2f",
                maxWidth: { xs: "120px", sm: "150px", md: "100%" },

                overflow: "hidden",
              },
            }}
          >
            <span
              style={{
                marginRight: "6px",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                color: isActive ? "black" : "white",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                color: isActive ? "black" : "white",
                fontWeight: isActive ? 700 : 500,
                fontSize: { xs: "12px", sm: "14px", md: "14px" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "80px",
              }}
            >
              {category.name}
            </span>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
