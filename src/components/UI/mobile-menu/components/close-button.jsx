import { Box, IconButton } from "@mui/material";
import  CloseButtonSVG from "../../../../assets/icons/close_Button.svg";

const CloseButton = ({onClose}) => {
  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{ margin: "0px", padding: "0px" }}
      >
        <img src={CloseButtonSVG} alt="Ru" />
      </IconButton>
    </Box>
  );
};

export default CloseButton;
