import { Box, Typography } from "@mui/material";
import ArrowRight from "../../../../assets/icons/arrows/arrow_right.svg";

const MainMenuItem = ({ item, onToggle, onGetItemID }) => {
  return (
    <Box
      onClick={() => (onToggle(), onGetItemID(item.id))}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
          color: "#1D7DED",
        },
      }}
    >
      <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
        {item.name}
      </Typography>
      <img src={ArrowRight} alt="Ru" />
    </Box>
  );
};

export default MainMenuItem;
