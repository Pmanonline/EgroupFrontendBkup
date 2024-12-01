import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ minWidth: "40px", p: 0 }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </Button>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          sx={{
            mx: 0.5,
            minWidth: "40px",
            backgroundColor:
              currentPage === number ? "primary.main" : "transparent",
            color: currentPage === number ? "white" : "inherit",
            "&:hover": {
              backgroundColor:
                currentPage === number ? "primary.dark" : "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          {number}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{ minWidth: "40px", p: 0 }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default Pagination;
