import { Box, Typography, styled } from "@mui/material";

const Components = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
  width: 100vw;
`;

const Message = ({ matches }) => {
  return (
    <Box>
      {matches ? (
        <Components variant="h5">
          Мобильное меню будет доступно при разрешение менее 500px
        </Components>
      ) : (
        <Components variant="h5">Нажмите "бургер", Сэр!</Components>
      )}
    </Box>
  );
};

export default Message;
