import { Box, Typography, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowSelected from "../../../../assets/icons/arrows/arrow_selected.svg";
import { LanguageList } from "../../../../data/languages-list";

const LanguageContainer = styled(Box)``;

const Country = styled(Typography)`
  font-weight: bold;
  padding: 14px 0 10px 17px;
`;

const LanguageIcon = styled(`img`)({
  width: "18px",
  height: "17px",
  margin: "0 8px 0 0",
});

const SelectedLangeuageIcon = styled(`img`)({
  width: "16px",
});

const LanguageMenu = ({
  currentLanguage,
  open,
  anchorEl,
  onClose,
  onChangeLanguage,
}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
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
                "& * img": {
                  width: "18px",
                  height: "17px",
                },
              },
            }}
            onClick={() => (onChangeLanguage(lang.id), onClose())}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "125px" }}>
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
  );
};

export default LanguageMenu;
