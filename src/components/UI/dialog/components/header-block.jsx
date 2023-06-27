import { Box, styled } from "@mui/material";
import LanguageSelect from "./language-select";
import CloseButton from "./close-button";

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
`;

const HeaderBlock = ({ onClose }) => {
  return (
    <Header>
      <LanguageSelect />
      <CloseButton onClose={onClose} />
    </Header>
  );
};

export default HeaderBlock;
