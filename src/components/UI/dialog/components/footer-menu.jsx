import { Box, Typography, styled } from "@mui/material";
import { FooterMenuItems } from "../../../../data/menu-items";

const Footer = styled(Box)`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 0 10px;
`;

const FooterMenu = () => {
  return (
    <Footer>
      {FooterMenuItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            "&:hover": {
              color: "#1D7DED",
            },
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>{item.name}</Typography>
        </Box>
      ))}
    </Footer>
  );
};

export default FooterMenu;
