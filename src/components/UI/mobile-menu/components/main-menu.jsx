import { Box, styled } from "@mui/material";
import { MainMenuItems } from "../../../../data/menu-items";
import MainMenuItem from "./main-menu-item";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 20px 10px;
`;

const MainMenu = ({ onToggle, onGetItemID }) => {
  return (
    <Component>
      {MainMenuItems.map((item) => (
        <MainMenuItem
          key={item.id}
          onToggle={onToggle}
          onGetItemID={onGetItemID}
          item={item}
        />
      ))}
    </Component>
  );
};

export default MainMenu;
