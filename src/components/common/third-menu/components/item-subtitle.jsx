import { Typography } from "@mui/material";

const ThirdMenuItemSubtitle = ({ item }) => {
  return (
    <Typography sx={{ fontSize: "12px", fontWeight: "500", color: "grey" }}>
      {item.subtitle}
    </Typography>
  );
};

export default ThirdMenuItemSubtitle;
