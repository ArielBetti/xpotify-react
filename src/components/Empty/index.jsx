// assets
import { EmptyIllustrationRender } from "../../assets/illustrations/empty";

// atoms: components
import * as Atom from "./style";

const Empty = () => {
  return (
    <Atom.Container>
      <EmptyIllustrationRender />
    </Atom.Container>
  );
};

export default Empty;
