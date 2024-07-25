import { useState } from "react";
import { categories } from "../../utils/constants";
import { Stack } from "@mui/material";

const Sidebar = () => {
  const [active, setActive] = useState("")

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat, index) => (
        <button key={index} className={`flex items-center justify-start xs:m-[10px] my-2 font-bold capitalize cursor-pointer outline-none border-none px-4 py-2 transition-colors rounded-3xl hover:bg-red ${active === cat.name ? 'bg-red' : ""} `}
        onClick={() => setActive(cat.name)}

        >
          <span className={`${active === cat.name ? '' : "opacity-80"} mr-4 hover:text-white `}>{cat.icon}</span>
          <span className={`${active === cat.name ? '' : " opacity-80"} `}>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
