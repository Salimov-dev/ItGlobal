import { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseButton from "./close-button";
import LanguageSelect from "../../language-select/language-select";
import LanguageMenu from "../../language-select/components/language-menu";

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
`;

const HeaderBlock = ({ onClose }) => {
  const [currentLanguage, setCurrentLanguage] = useState(4);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (id) => {
    setCurrentLanguage(id);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Header>
      <Box>
        <LanguageSelect
          open={open}
          handleClick={handleClick}
          currentLanguage={currentLanguage}
        />
        <LanguageMenu
          currentLanguage={currentLanguage}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onChangeLanguage={handleChangeLanguage}
        />
      </Box>
      <CloseButton onClose={onClose} />
    </Header>
  );
};

export default HeaderBlock;
