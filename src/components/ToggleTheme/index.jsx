import { useRecoilState } from "recoil";
import { useTheme } from "styled-components";

// icons
import { MdDarkMode, MdLightMode } from "react-icons/md";

// atoms
import * as Atom from "./style";

// recoil: atoms
import { atomDarkTheme } from "../../store/atoms";

const ToggleTheme = () => {
  const theme = useTheme();

  // recoil: states
  const [toggleTheme, setToggleTheme] = useRecoilState(atomDarkTheme);

  return (
    <Atom.Container
      onClick={() => setToggleTheme(!toggleTheme)}
      className="border-2 border-x-cyan-500 pt-6"
    >
      {toggleTheme ? (
        <MdLightMode color={theme?.colors?.text.dark} size="20px" />
      ) : (
        <MdDarkMode color={theme?.colors?.text.white} size="20px" />
      )}
    </Atom.Container>
  );
};

export default ToggleTheme;
