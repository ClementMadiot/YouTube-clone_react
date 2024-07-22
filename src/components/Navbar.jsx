import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    p={2}
    className="bg-black sticky top-0 items-center flex-row"
  >
    <Link to='/' className="flex items-center">
    <img src={logo} alt="logo" height={45} />
    </Link>
  </Stack>
);

export default Navbar;
