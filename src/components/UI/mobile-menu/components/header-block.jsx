import { Box, Typography, styled } from "@mui/material";
import LanguageSelect from "./language-select";
import CloseButton from "./close-button";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LanguageList } from "../../../../data/languages-list";
import ArrowSelected from "../../../../assets/icons/arrows/arrow_selected.svg";

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
`;

const LanguageContainer = styled(Box)``;

const Country = styled(Typography)`
  font-weight: bold;
  padding: 14px 0 10px 17px;
`;

const LanguageIcon = styled(`img`)({
  width: "18px",
  height: "18px",
  margin: "0 8px 0 0",
});

const SelectedLangeuageIcon = styled(`img`)({
  width: "16px",
});

const HeaderBlock = ({ onClose }) => {
  const [currentLanguage, setCurrentLanguage] = useState(4);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (id) => {
    setCurrentLanguage(id);
  };

  return (
    <Header>
      <Box>
        <LanguageSelect
          open={open}
          handleClick={handleClick}
          currentLanguage={currentLanguage}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <LanguageContainer>
            <Country>Страна</Country>
            {LanguageList.map((lang) => (
              <MenuItem
                key={lang.id}
                sx={{
                  padding: "12px 15px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  "&:hover": {
                    border: "1px solid black",
                    backgroundColor: "inherit",
                    padding: "11px 14px",
                  },
                }}
                onClick={() => (handleChangeLanguage(lang.id), handleClose())}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "125px" }}
                >
                  <LanguageIcon src={lang.img} />
                  <Typography>{lang.name}</Typography>
                </Box>
                {lang.id === currentLanguage && (
                  <SelectedLangeuageIcon src={ArrowSelected} />
                )}
              </MenuItem>
            ))}
          </LanguageContainer>
        </Menu>
      </Box>
      <CloseButton onClose={onClose} />
    </Header>
  );
};

export default HeaderBlock;
