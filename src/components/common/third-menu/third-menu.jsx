import { Box, Divider, Typography, styled } from "@mui/material";
// hooks
import useFindMenuItemById from "../../../hooks/use-find-menu-item";
import useFindParentId from "../../../hooks/use-find-parent-id";
// components
import ThirdMenuTitle from "./components/third-menu-title";
import ThirdMenuItemTitle from "./components/item-title";
import ThirdMenuItemSubtitle from "./components/item-subtitle";
// data
import { MainMenuItems } from "../../../data/menu-items";

const Component = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 10px;
`;

const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 30px 0 0;
  overflow: auto;
  margin-right: -30px;
`;

const MenuItemContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 0 10px 0;
`;

const ThirdMenu = ({ id, onMenuBack }) => {
  const currentItemMenu = useFindMenuItemById(MainMenuItems, id);
  const title = currentItemMenu.name;
  const parentId = useFindParentId(MainMenuItems, id);

  return (
    <Component>
      <ThirdMenuTitle
        title={title}
        onMenuBack={onMenuBack}
        parentId={parentId}
      />

      <Divider sx={{ margin: "0 -30px 0 -30px" }} />

      <Menu>
        {currentItemMenu.items.map((item) => (
          <MenuItemContainer key={item.id}>
            <ThirdMenuItemTitle item={item} />
            <ThirdMenuItemSubtitle item={item} />
          </MenuItemContainer>
        ))}
      </Menu>
    </Component>
  );
};

export default ThirdMenu;
