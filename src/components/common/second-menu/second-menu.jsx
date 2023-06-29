import { Box, styled } from "@mui/material";
import { MainMenuItems } from "../../../data/menu-items";
import useFindMenuItemById from "../../../hooks/use-find-menu-item";
import SecondMenuItem from "./components/second-menu-item";
import SecondMenuTitle from "./components/second-menu-title";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 10px;
`;

const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecondMenu = ({ id, onMenuBack, onToggle, onGetItemID }) => {
  const currentItemMenu = useFindMenuItemById(MainMenuItems, id);
  const title = currentItemMenu.name;
  const menuItems = currentItemMenu.items;

  return (
    <Component>
      <SecondMenuTitle title={title} onMenuBack={onMenuBack} />

      <Menu>
        {menuItems.map((item) => (
          <SecondMenuItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onGetItemID={onGetItemID}
          />
        ))}
      </Menu>
    </Component>
  );
};

export default SecondMenu;
