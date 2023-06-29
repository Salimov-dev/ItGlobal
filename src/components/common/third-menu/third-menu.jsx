import { Box, Divider, Typography, styled } from "@mui/material";
import { MainMenuItems } from "../../../data/menu-items";
import useFindMenuItemById from "../../../hooks/use-find-menu-item";
import useFindParentId from "../../../hooks/use-find-parent-id";
import ThirdMenuTitle from "./components/third-menu-title";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 10px;
`;

const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 0 0;
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
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "0 0 10px 0",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                {item.title}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "500", color: "grey" }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Menu>
    </Component>
  );
};

export default ThirdMenu;
