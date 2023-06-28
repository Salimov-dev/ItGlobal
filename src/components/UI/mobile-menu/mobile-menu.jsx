import React, { forwardRef, useState } from "react";
// MUI components
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Box, styled } from "@mui/material";
// components
import MainMenu from "./components/main-menu";
import FooterMenu from "./components/footer-menu";
import HeaderBlock from "./components/header-block";
import SecondMenu from "../../common/second-menu/second-menu";
import ThirdMenu from "../../common/third-menu/third-menu";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled(Box)`
  padding: 10px 10px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
`;

const MobileMenu = ({ onClose, open, menuNumber, setMenuNumber }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(1);

  const handleToggleSecondMenu = () => {
    setMenuNumber(2);
  };

  const handleToggleThirdMenu = () => {
    setMenuNumber(3);
  };

  const handleMenuBack = (id) => {
    setMenuNumber(menuNumber - 1);
    id && setCurrentMenuItem(id)
  };

  const handleGetItemID = (id) => {
    setCurrentMenuItem(id);
  };

  return (
    <Box>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <Container>
          <HeaderBlock onClose={onClose} />
          {menuNumber === 1 && <MainMenu onToggle={handleToggleSecondMenu} onGetItemID={handleGetItemID} />}
          {menuNumber === 2 && <SecondMenu id={currentMenuItem} onToggle={handleToggleThirdMenu} onMenuBack={handleMenuBack} onGetItemID={handleGetItemID}/>}
          {menuNumber === 3 && <ThirdMenu  id={currentMenuItem} onMenuBack={handleMenuBack}/>}
          {menuNumber === 1 && <FooterMenu />}
        </Container>
      </Dialog>
    </Box>
  );
};

export default MobileMenu;
