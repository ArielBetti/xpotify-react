import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

// icons
import { MdArrowBack } from "react-icons/md";

// atoms: components
import * as Atom from "./style";

const ReturnButton = ({ customAction }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Atom.ReturnButtonContainer
      onClick={() => (customAction ? customAction() : navigate(-1))}
    >
      <MdArrowBack size="20px" color={theme?.colors?.text?.inverse} />
    </Atom.ReturnButtonContainer>
  );
};

export default ReturnButton;
