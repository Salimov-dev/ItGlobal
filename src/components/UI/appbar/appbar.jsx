import React, { useState } from "react";
// libraries
import { useSelector } from "react-redux";
// MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, styled } from "@mui/material";
// components
import MobileMenu from "../mobile-menu/mobile-menu";

const Message = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuNumber, setMenuNumber] = useState(1);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMenuNumber(1);
  };

  const matches = useMediaQuery("(min-width:360px)");

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
              {!matches && <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        {matches ? (
          <Message variant="h5">
            Мобильное меню будет доступно при разрешение менее 360px
          </Message>
        ) : (
          <Message variant="h5">Нажмите "бургер", Сэр!</Message>
        )}
      </Box>

      <MobileMenu
        onClose={handleClose}
        open={isOpen}
        menuNumber={menuNumber}
        setMenuNumber={setMenuNumber}
      />
    </>
  );
};

export default Appbar;
