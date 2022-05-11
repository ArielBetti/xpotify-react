// assets
import empty from "../../assets/illustrations/empty2.svg";

// typography
import * as Typography from "../../Typography";

// atoms: components
import * as Atom from "./style";

const Empty = () => {
  return (
    <Atom.Container>
      <Atom.EmptySvg src={empty} />
      <Typography.ParagraphBold>Parece vazio...</Typography.ParagraphBold>
    </Atom.Container>
  );
};

export default Empty;
