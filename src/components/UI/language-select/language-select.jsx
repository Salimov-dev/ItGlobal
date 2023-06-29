import { Box, Button, styled } from "@mui/material";
import { LanguageList } from "../../../data/languages-list";
import ArrowDown from "../../../assets/icons/arrows/arrow_down.svg";
import ArrowUp from "../../../assets/icons/arrows/arrow_up.svg";

const Component = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LanguageSelectBlock = styled(Box)`
  display: flex;
  gap: 5px;
`;

const Language = styled(Button)`
  font-weight: 600;
  font-size: 20px;
  color: inherit;
  padding: 0;
  text-transform: none;
  min-width: 0;
`;

const LanguageIcon = styled(`img`)({ width: "24px" });

const Arrow = styled(`img`)({});

const LanguageSelect = ({ open, handleClick, currentLanguage }) => {
  const selectedLanguage = LanguageList.find(
    (lang) => lang.id === currentLanguage
  );

  return (
    <Component
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >
      <LanguageIcon src={selectedLanguage.img} alt="Ru" />
      <LanguageSelectBlock>
        <Language>{selectedLanguage.title}</Language>
        <Arrow src={open ? ArrowUp : ArrowDown} alt="arrow" />
      </LanguageSelectBlock>
    </Component>
  );
};

export default LanguageSelect;
