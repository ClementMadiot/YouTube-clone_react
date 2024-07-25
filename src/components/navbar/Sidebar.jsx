import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {


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
        <button key={index} className={`flex items-center justify-start xs:m-[10px] my-2 font-bold capitalize cursor-pointer outline-none border-none px-4 py-2 transition-colors rounded-3xl hover:bg-red category-btn ${cat.name === selectedCategory ? 'bg-red' : ''} `}
        onClick={() => setSelectedCategory(cat.name)}
        >
          <span className={`mr-4 ${cat.name === selectedCategory ? 'text-white' : 'text-red'}`}>{cat.icon}</span>
          <span className={`${cat.name === selectedCategory ? "" : "opacity-80"}`}>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
