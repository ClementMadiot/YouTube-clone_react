import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui import
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
// reset the search input
      setSearchTerm('');
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      className=" shadow-none border border-[#e3e3e3]"
      sx={{
        borderRadius: 20,
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input 
      placeholder="Search..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      className="outline-none border-none sm:w-[350px] w-[200px]" />
      <IconButton type="submit" sx={{p:'10px', color:'red'}}>
      <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
