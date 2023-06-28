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

const MobileMenu = ({ onClose, open }) => {
  const [menuNumber, setMenuNumber] = useState(1);

  const handleToggleMenu = (id) => {
    console.log("id", id);
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
          <SecondMenu/>
          
          {/* <MainMenu onToggle={handleToggleMenu} /> */}
          {/* <FooterMenu /> */}

        </Container>
      </Dialog>
    </Box>
  );
};

export default MobileMenu;
