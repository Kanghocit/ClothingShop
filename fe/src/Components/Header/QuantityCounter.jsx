import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(2); 

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        
        width: "120px",
      }}
    >
      {/* Nút giảm */}
      <IconButton
        size="small"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        sx={{ padding: "4px" }}
      >
        <Remove />
      </IconButton>

      {/* Ô nhập số lượng */}
      <TextField
        value={quantity}
        onChange={handleChange}
        variant="standard"
        sx={{
          "& .MuiInputBase-root": {
            "&:before": {
              borderBottom: "none",
            },
            "& input": {
              fontSize: "16px",
              textAlign: "center",
            },
          },
        }}
      />

      {/* Nút tăng */}
      <IconButton size="small" onClick={handleIncrease} sx={{ padding: "4px" }}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default QuantityCounter;
