import { Box, Typography, styled } from "@mui/material";
import { MainMenuItems } from "../../../data/menu-items";
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
  line-height: 28px;
`;

const Menu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ArrowBack = styled(`img`)({
  cursor: "pointer",
});

const ThirdMenu = ({ id = 11, onMenuBack }) => {
  const findMenuItemById = (arr, targetId) => {
    for (const obj of arr) {
      if (obj.id === targetId) {
        return obj;
      }
      if (obj.items) {
        const foundObj = findMenuItemById(obj.items, targetId);
        if (foundObj) {
          return foundObj;
        }
      }
    }
    return null;
  };

  const currentItemMenu = findMenuItemById(MainMenuItems, id);
  const title = currentItemMenu.name;
  console.log("currentItemMenu", currentItemMenu);

  const arr = [{ id: 1, name: "Dev", items: [{ id: 22, title: "gog" }] }];

  const findParentId = (arr, targetId) => {
    for (const obj of arr) {
      if (obj.items) {
        for (const item of obj.items) {
          if (item.id === targetId) {
            return obj.id;
          }
        }
        const parentId = findParentId(obj.items, targetId);
        if (parentId) {
          return parentId;
        }
      }
    }
    return null;
  };

  const parentId = findParentId(MainMenuItems, id);

  return (
    <Component>
      <Title>
        <ArrowBack
          src={ArrowLeft}
          alt="Back"
          onClick={() => onMenuBack(parentId)}
        />
        {title}
      </Title>

      <Menu>
        {currentItemMenu.items.map((item) => (
          <Box
            key={item.id}
            onClick={() => onToggle(item.id)}
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
