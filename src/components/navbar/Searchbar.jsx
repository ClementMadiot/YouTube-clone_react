import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui import
import { styled } from '@mui/material/styles';
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    // Styles pour le label à l'intérieur du formulaire
  },
  '& .MuiFormControl-root': {
    // Styles pour le FormControl à l'intérieur du formulaire
  },
  '&:focus-within': {
    // Styles à appliquer lorsque le focus est à l'intérieur du Paper
    border: '1px solid #065fd4', // Bordure bleue marine de 2px
  },
}));

const Button = styled(IconButton)(({ theme }) => ({
  '&.hiver-within': {

  },
  '&:hover': {
    // Your desired hover styles here
    backgroundColor: '#3f3f3f99', 
    color: '#b5b5b5', // Example: Change text color on hover
  },
  '&:active': {

    },
}));

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
    <StyledPaper
      component="form"
      onSubmit={handleSubmit}
      className=" shadow-none border "
      sx={{
        borderRadius: 20,
        pl: 2,
        mr: { sm: 5 },
        background: 'hsl(0,0%,7%)',
        borderColor: 'hsl(0,0%,18.82%)'
      }}
    >
      <input 
      placeholder="Search..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      className="outline-none border-none sm:w-[320px] w-[170px] vsm:w-[200px] placeholder-gray bg-lightBlack text-white" />
      <Button disableRipple type="submit" sx={{p:'8px 15px', color:'#a0a0a0', background:'#3f3f3f75', borderRadius: '0 21px 21px 0'}}>
      <Search/>
      </Button>
    </StyledPaper>
  );
};

export default SearchBar;
