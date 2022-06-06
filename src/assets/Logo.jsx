import { BsSoundwave } from "react-icons/bs";
import { useTheme } from "styled-components";

const Logo = ({ color, size }) => {
  const theme = useTheme();
  return (
    <BsSoundwave
      color={color || theme?.colors?.contrast}
      size={size || "30px"}
    />
  );
};

export default Logo;
