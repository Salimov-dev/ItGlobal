import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../store/language.store";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Typography, styled } from "@mui/material";
import IconRu from "../../../assets/icons/Icon_RU.png";
import ArrowDown from "../../../assets/icons/arrow_down.svg";
import CloseButton from "../../../assets/icons/close_Button.svg";
import ArrowRight from "../../../assets/icons/arrow_right.svg";
import { FooterMenuItems, MainMenuItems } from "../../../data/menu-items";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled(Box)`
  padding: 10px 10px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
`;

const LanguageBlock = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 0 10px;
`;

const Footer = styled(Box)`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px 0 10px;
`;

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const language = useSelector(getLanguage());
  const mainMenuItems = MainMenuItems;
  const footerMenuItems = FooterMenuItems;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClickOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Container>
            <Header>
              <LanguageBlock>
                <img src={IconRu} alt="Ru" />
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Ru
                  </Typography>
                  <img src={ArrowDown} alt="Ru" />
                </Box>
              </LanguageBlock>

              <Box>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                  sx={{ margin: "0px", padding: "0px" }}
                >
                  <img src={CloseButton} alt="Ru" />
                </IconButton>
              </Box>
            </Header>

            <Main>
              {mainMenuItems.map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography key={item.id} sx={{ fontWeight: "600" }}>
                    {item.name}
                  </Typography>
                  <img src={ArrowRight} alt="Ru" />
                </Box>
              ))}
            </Main>

            <Footer>
              {footerMenuItems.map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography key={item.id} sx={{ fontWeight: "600" }}>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Footer>
          </Container>
        </Dialog>
      </Box>
    </>
  );
};

export default Sidebar;
