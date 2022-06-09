import { Bars } from "react-loader-spinner";
import { useTheme } from "styled-components";
import * as Atom from "./style";

const Loader = ({ disclaimer }) => {
  const theme = useTheme();
  return (
    <Atom.Container>
      <Atom.Loader>
        <Bars
          color={theme.colors?.contrast}
          width="150px"
          ariaLabel="loading-indicator"
        />
        <Atom.Disclaimer>{disclaimer || "Carregando"}</Atom.Disclaimer>
      </Atom.Loader>
    </Atom.Container>
  );
};

export default Loader;
