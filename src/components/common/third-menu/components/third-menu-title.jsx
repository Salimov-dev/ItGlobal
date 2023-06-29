import { Box, styled } from "@mui/material";
import ArrowLeft from "../../../../assets/icons/arrows/arrow_left.svg";

const ArrowBack = styled(`img`)({
  cursor: "pointer",
});

const Title = styled(Box)`
  display: flex;
  alignitems: center;
  gap: 5px;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 0 -22px;
  padding: 0 0 20px 0;
  line-height: 28px;
`;

const ThirdMenuTitle = ({ title, onMenuBack, parentId }) => {
  return (
    <Title onClick={() => onMenuBack(parentId)}>
      <ArrowBack src={ArrowLeft} alt="Back" />
      {title}
    </Title>
  );
};

export default ThirdMenuTitle;
