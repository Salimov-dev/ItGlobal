import { Box, styled } from "@mui/material";
import ArrowLeft from "../../../../assets/icons/arrows/arrow_left.svg";

const Title = styled(Box)`
  display: flex;
  alignitems: center;
  gap: 5px;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 0 -22px;
  padding: 0 0 41px 0;
`;

const ArrowBack = styled(`img`)({
  cursor: "pointer",
});

const SecondMenuTitle = ({ title, onMenuBack }) => {
  return (
    <Title display="flex" alignItems="center" gap="5px" fontSize="22px">
      <ArrowBack src={ArrowLeft} alt="Back" onClick={onMenuBack} />
      {title}
    </Title>
  );
};

export default SecondMenuTitle;
