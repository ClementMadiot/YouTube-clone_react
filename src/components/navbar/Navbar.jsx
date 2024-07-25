import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../../utils/constants";
import Searchbar from "./Searchbar";

const Navbar = () => (
  <Stack p={2} direction="row" alignItems="center" className="bg-black sticky top-0 flex justify-between">
    <Link to="/" className="flex items-center ">
      <img src={logo} alt="logo" className="h-[45px]" />
    </Link>
    <Searchbar />
  </Stack>
);

export default Navbar;
