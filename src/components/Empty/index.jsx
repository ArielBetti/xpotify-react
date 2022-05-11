// assets
import { EmptyIllustrationRender } from "../../assets/illustrations/empty";

// typography
import * as Typography from "../../Typography";

// atoms: components
import * as Atom from "./style";

const Empty = () => {
  return (
    <Atom.Container>
      <EmptyIllustrationRender />
      <Typography.ParagraphBold>Parece vazio...</Typography.ParagraphBold>
    </Atom.Container>
  );
};

export default Empty;
