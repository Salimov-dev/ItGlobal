import { Typography } from "@mui/material";

const ThirdMenuItemTitle = ({ item }) => {
  return (
    <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
      {item.title}
    </Typography>
  );
};

export default ThirdMenuItemTitle;
