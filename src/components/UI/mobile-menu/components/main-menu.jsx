import { Box, Typography, styled } from "@mui/material";
import ArrowRight from "../../../../assets/icons/arrows/arrow_right.svg";
import { MainMenuItems } from "../../../../data/menu-items";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 0 10px;
`;

const MainMenu = ({ onToggle }) => {
  return (
    <Component>
      {MainMenuItems.map((item) => (
        <Box
          key={item.id}
          onClick={() => onToggle(item.id)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            "&:hover": {
              color: "#1D7DED",
            },
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>{item.name}</Typography>
          <img src={ArrowRight} alt="Ru" />
        </Box>
      ))}
    </Component>
  );
};

export default MainMenu;
