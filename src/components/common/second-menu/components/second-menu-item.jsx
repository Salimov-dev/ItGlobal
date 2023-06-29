import { Box, Typography } from "@mui/material";
import ArrowRight from "../../../../assets/icons/arrows/arrow_right.svg";

const SecondMenuItem = ({ item, onToggle, onGetItemID }) => {
  return (
    <Box
      onClick={() => (onToggle(item.id), onGetItemID(item.id))}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
          color: "#1D7DED",
        },
      }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
        {item.name}
      </Typography>
      <img src={ArrowRight} alt="Ru" />
    </Box>
  );
};

export default SecondMenuItem;
