import { Box, Typography, styled } from "@mui/material";
import IconRu from "../../../../assets/icons/countries/Icon_RU.png";
import ArrowDown from "../../../../assets/icons/arrows/arrow_down.svg";

const Component = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LanguageSelectBlock = styled(Box)`
  display: flex;
  gap: 5px;
`;

const SelectedLanguage = styled(Box)`
  font-weight: 600;
  font-size: 20px;
`;

const LanguageIcon = styled(`img`)({ width: "24px" });

const ArrowDownButton = styled(`img`)({ width: "16px", paddingTop: "4px" });

const LanguageSelect = () => {
  return (
    <Component>
      <LanguageIcon src={IconRu} alt="Ru" />
      <LanguageSelectBlock>
        <SelectedLanguage>Ru</SelectedLanguage>
        <ArrowDownButton src={ArrowDown} alt="Down" />
      </LanguageSelectBlock>
    </Component>
  );
};

export default LanguageSelect;
