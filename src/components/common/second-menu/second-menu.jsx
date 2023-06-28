import { Box, Typography, styled } from "@mui/material";
import { MainMenuItems } from "../../../data/menu-items";
import ArrowRight from "../../../assets/icons/arrows/arrow_right.svg";
import ArrowLeft from "../../../assets/icons/arrows/arrow_left.svg";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 10px;
`;

const Title = styled(Box)`
  display: flex;
  alignitems: center;
  gap: 5px;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 0 -22px;
  padding: 0 0 41px 0;
`;

const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ArrowBack = styled(`img`)({
  cursor: "pointer",
});

const SecondMenu = ({ id, onMenuBack }) => {
  const currentItemMenu = MainMenuItems.filter((item) => item.id === id);
  const title = currentItemMenu[0].name;
  const menuItems = currentItemMenu[0].items;

  return (
    <Component>
      <Title display="flex" alignItems="center" gap="5px" fontSize="22px">
        <ArrowBack src={ArrowLeft} alt="Back" onClick={onMenuBack} />
        {title}
      </Title>

      <Menu>
        {menuItems.map((item) => (
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
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              {item.name}
            </Typography>
            <img src={ArrowRight} alt="Ru" />
          </Box>
        ))}
      </Menu>
    </Component>
  );
};

export default SecondMenu;
