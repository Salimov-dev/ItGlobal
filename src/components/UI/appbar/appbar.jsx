import React, { useState } from "react";
// MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
// components
import MobileMenu from "../mobile-menu/mobile-menu";
import Message from "./components/message";

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

  const matches = useMediaQuery("(min-width:501px)");

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

      <Message matches={matches} />

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
