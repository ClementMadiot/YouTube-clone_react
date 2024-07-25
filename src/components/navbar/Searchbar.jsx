import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui import
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input placeholder="Search..." value="" onChange={() => {}} className="w-[350px] outline-none border-none" />
      <IconButton type="submit" sx={{p:'10px', color:'red'}}>
      <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
