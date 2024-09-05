import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {


  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { sm: "column" },
      }}
    >
      {categories.map((cat, index) => (
        <button key={index} className={`flex items-center justify-center md:justify-start my-2 font-bold capitalize cursor-pointer outline-none border-none px-4 py-1 text-xs md:text-base transition-colors rounded-3xl hover:bg-red category-btn ${cat.name === selectedCategory ? 'bg-red' : ''} `}
        onClick={() => setSelectedCategory(cat.name)}
        >
          <span className={`md:mr-4 ${cat.name === selectedCategory ? 'text-white' : 'text-red'}`}>{cat.icon}</span>
          <span className={` min-w-full md:min-w-fit ${cat.name === selectedCategory ? "" : "opacity-80"}`}>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
