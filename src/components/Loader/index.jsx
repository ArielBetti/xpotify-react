import { Audio } from "react-loader-spinner";
import { useTheme } from 'styled-components';
import * as Atom from "./style";

const Loader = () => {
  const theme = useTheme();
  return (
    <Atom.Container>
      <Atom.Loader>
        <Audio
          color={theme.colors?.primary}
          width="150px"
          wrapperStyle={{ justifyContent: "center" }}
        />
        <Atom.Disclaimer>Carregando</Atom.Disclaimer>
      </Atom.Loader>
    </Atom.Container>
  );
};

export default Loader;
